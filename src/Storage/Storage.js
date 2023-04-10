const addToDb = id => {
    let job = getJobs();
    // add quantity
    const quantity = job[id];
    if (!quantity) {
        job[id] = 1;
    }
    else {
        // const newQuantity = quantity + 1;
        // job[id] = newQuantity;
    }
    localStorage.setItem('job-id', JSON.stringify(job));
}
const getJobs = () => {
    let job = {};

    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('job-id');
    if (storedJob) {
        job = JSON.parse(storedJob);
    }
    return job;
}

export { addToDb, getJobs }