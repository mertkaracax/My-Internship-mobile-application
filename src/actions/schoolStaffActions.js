import api from "../api";
import { logError } from "../api/apiHelper";

export const getSchoolInformation = async () => {
  api.getSchools1().then((output) => {
    console.log(`ARRAY: -${JSON.stringify(output)}`);
    const school = output[0];
    console.log(`Actions: ${JSON.stringify(school)}`);
    return school;
  });
};

export const getChangeRequestDetaill = async () => {
  api.getChangeRequestDetaill().then((output) => {
    const request = output[0];
    return request;
  });
};

export const getSchoolBusesInfo = async () => {
  api.getSchoolBusesInfo().then((output) => {
    console.log(`Actions: ${output}`);
  });
};

export const getSchoolBusStops = async () => {
  api.getParent().then((response) => {
    console.log(response);
  });
};
