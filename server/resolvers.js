import {getJobs, getCompany, getJob} from './db/jobs.js';

export const resolvers = {
    Query: {
        job: async (_root, {id}) => {
            return await getJob(id)
        },
        jobs: async() => {
            const jobs = await getJobs();
            return jobs;
        }
    },
    Job: {
        company: async (job) => {
           return await getCompany();
        },
        date: (job) =>  job.date
    }
}