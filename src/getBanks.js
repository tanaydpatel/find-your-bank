import axios from "axios";
import updateBanks from "./actionCreators/updateBanks";
import updateLoading from "./actionCreators/updateLoading";
import updateError from "./actionCreators/updateError";
import store from "./store";

const myStorage = window.localStorage;

if (myStorage.getItem("cache") === null) {
  myStorage.setItem("cache", JSON.stringify({}));
}

function clearFromCache(key) {
  const cached = JSON.parse(myStorage.getItem("cache"));
  if (cached[key]["exp"] < Date.now()) {
    delete cached[key];
  }
  myStorage.setItem("cache", JSON.stringify(cached));
}

function getFromCache(key) {
  const cached = JSON.parse(myStorage.getItem("cache"));
  return cached[key];
}

function setCache(key, data) {
  const cached = JSON.parse(myStorage.getItem("cache"));
  cached[key] = { exp: Date.now() + 60000, data };
  myStorage.setItem("cache", JSON.stringify(cached));

  setTimeout(() => {
    clearFromCache(key, data);
  }, 60000);
}

function getBanksFromAPI() {
  store.dispatch(updateBanks([]));

  store.dispatch(updateLoading(true));
  const storeData = store.getState();

  if (!getFromCache(storeData.searchParams.city)) {
    axios
      .get(
        `https://vast-shore-74260.herokuapp.com/banks?city=${storeData.searchParams.city}`,
        { timeout: 15000 }
      )
      .then((res) => {
        store.dispatch(updateBanks(res.data));
        store.dispatch(updateLoading(false));
        setCache(storeData.searchParams.city, res.data);
      })
      .catch((data) => {
        const error = {
          msg: data.message,
          body: data,
        };
        store.dispatch(updateError(error));
        store.dispatch(updateLoading(false));
      });
  } else {
    const cachedData = getFromCache(storeData.searchParams.city);
    store.dispatch(updateBanks(cachedData.data));
    store.dispatch(updateLoading(false));
    setCache(storeData.searchParams.city, cachedData.data);
  }
}

export default getBanksFromAPI;
