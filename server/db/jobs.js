import prisma from "./dbConnection.js";


export async function getJobs() {
    const jobs = await prisma.jobob.findMany();
    return jobs;
}

export async function getJob(id) {
  
    const job = await prisma.jobob.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    return job;
}

export async function job(id) {
    const jobs = await prisma.jobob.findMany({
        where : {id}
    });
    return jobs;
}

export async function getCompany(id) {
    const company = await prisma.company.findMany({
        where : {id}
    });
    return company;
}