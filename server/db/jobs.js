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
    const company = await prisma.company.findFirst({
        where : {id}
    });
    return company;
}

export async function createJob({companyId,title, description}) {

    const job = {
        companyId,
        title, 
        description,
        date: new Date().toDateString()
    }

    const response = await prisma.jobob.create({data:job});
    return response;
}

export async function deleteJob({id}) {
    const job = await prisma.jobob.findFirst({
        where : {id: parseInt(id)}
    });
    if(job) {
        await prisma.jobob.delete({
            where : {id: parseInt(id)}
        });
    }
    return job;
}