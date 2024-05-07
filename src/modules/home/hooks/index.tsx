export function useJobs() {
  const getJobsList = async () => {
    try {
      console.log("Get Jobs List");
    } catch (error) {
      console.log("Get Account ERROR: ", error);
    }
  };

  return {
    getJobsList,
  };
}
