import toast from 'react-hot-toast';
const addToDb = id => {
    let job = getJobs();
    const quantity = job[id];
    if (quantity) {
        toast.error("Already application submitted");
    }
    else {
        job[id] = 1;
        toast.success("Application submitted successfully")
    }
    localStorage.setItem('job-id', JSON.stringify(job));
}
const getJobs = () => {
    let job = {};
    const storedJob = localStorage.getItem('job-id');
    if (storedJob) {
        job = JSON.parse(storedJob);
    }
    return job;
}
export { addToDb, getJobs }
