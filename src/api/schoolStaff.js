import { logError } from "./apiHelper";

function SchoolStaffControllerMixin(BaseClass) {
  return class SchoolStaffController extends BaseClass {
    async getChangeRequestDetaill() {
      try {
        const result = await this.api.get("​/SchoolStaffGetChangeRequestDetail", {
          params: { changeRequestId: 64 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolInformation() {
      try {
        const result = await this.api.get("/SchoolStaffGetSchoolInformation", {});
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getStudentsSchoolStaff() {
      try {
        const result = await this.api.get("/SchoolStaffGetStudents", {
          params: { lastSeenStudentName: "" }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolBusesInfo() {
      try {
        const result = await this.api.get("/SchoolStaffGetSchoolBusesInfo", {
          params: { date: "2021-09-17T14:32:28Z" }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolBusStops() {
      try {
        const result = await this.api.get("SchoolStaffGetSchoolBusStops", {
          params: { schoolBusId: 1, date: "2021-09-17T14:32:28Z", direction: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getChangeRequests() {
      try {
        const result = await this.api.get("/SchoolStaffGetChangeRequests", {});
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }
  };
}
export default SchoolStaffControllerMixin;
