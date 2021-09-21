import { logError } from "./apiHelper";

function CompanyStaffControllerMixin(BaseClass) {
  return class CompanyStaffController extends BaseClass {
    async getDrivers() {
      try {
        const result = await this.api.get("/CompanyStaffGetDrivers", {
          params: { schoolId: 1 }
        });
        // if (Array.isArray(result?.data?.Data?.Drivers)) return result.data.Data.Drivers;
        // return [];
        return result.data.Data;
      } catch (err) {
        logError(`ERROR----------------------------${err}`);
        return null;
      }
    }

    async getHostesses() {
      try {
        const result = await this.api.get("/CompanyStaffGetHostesses", {
          params: { schoolId: 1 }
        });
        // if (Array.isArray(result?.data?.Data?.Drivers)) return result.data.Data.Drivers;
        // return [];
        return result.data.Data;
      } catch (err) {
        logError(`ERROR----------------------------${err}`);
        return null;
      }
    }

    async searchStudent(name) {
      try {
        const result = await this.api.get("/SchoolSecuritySearchStudent", {
          params: { key: name }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchools() {
      try {
        const result = await this.api.get("/CompanyStaffGetSchools", {});
        console.log(result.data.Data);
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getBuses() {
      try {
        const result = await this.api.get("/CompanyStaffGetBuses", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getStudents() {
      try {
        const result = await this.api.get("/CompanyStaffGetStudents", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getParent() {
      try {
        const result = await this.api.get("/CompanyStaffGetParent", {
          params: { studentId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getRoutes() {
      try {
        const result = await this.api.get("/CompanyStaffGetRoutes", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getDefaultStops() {
      try {
        const result = await this.api.get("/CompanyStaffGetDefaultStops", {
          params: { routeId: 1, direction: 1 } // Date kısmında hata var. Formatı ögrenicez.
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getSchoolChangeRequests() {
      try {
        const result = await this.api.get("/CompanyStaffGetSchoolChangeRequests", {
          params: { schoolId: 1 }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }

    async getChangeRequestDetail(requestId) {
      try {
        const result = await this.api.get("/CompanyStaffGetChangeRequestDetail", {
          params: { changeRequestId: requestId }
        });
        return result.data.Data;
      } catch (err) {
        logError(err);
        return null;
      }
    }
  };
}

export default CompanyStaffControllerMixin;
