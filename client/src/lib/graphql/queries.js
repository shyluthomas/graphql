
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('http://localhost:9000/graphql');


export async function getJobs() {
    const query = gql`
    query  {
        jobs {
          id
          title
          description
          date
          company {
            title
          }
        }
      }`;
    const data = await client.request(query);
    return data;
}

export async function getJob(id) {
    const query = gql`
    query  JobById($id: ID!) {
        job(id: $id) {
          id
          title
          description
          date
        }
      } `;
    const data = await client.request(query, {id});
    return data;
}

export async function createJob({title, description}) {
  const query = gql`
    mutation($title: String, $description: String) {
      createJob(title: $title, description: $description) {
        title
        description
      }
    } `;
  const data = await client.request(query, {title,description});
  return data;
}

export async function deleteJob(id) {
  const query = gql`
    mutation($id: ID!) {
      deleteJob(id: $id) {
        title
        description
      }
    } `;
  const data = await client.request(query, {id});
  return data;
}