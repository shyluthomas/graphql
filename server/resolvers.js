import {getJobs, getCompany, getJob, createJob} from './db/jobs.js';

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
           return await getCompany(job.companyId);
        },
        date: (job) =>  job.date
    },
    Mutation: {
        createJob: async (_root, {title,description}) => {
            const companyId = 1;
            return await createJob({companyId,title, description});

        }
    }
}