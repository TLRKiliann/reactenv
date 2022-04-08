const NAME = 'NAME';
const PASS = 'PASS';

export const actionName = (entryName) => {
  return {
    type: NAME,
    payload: entryName
  }
}

export const actionPass = (entryPass) => {
  return {
    type: PASS,
    payload: entryPass
  }
}