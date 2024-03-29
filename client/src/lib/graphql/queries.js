
import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:9000/graphql');
export const apolloClient = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
  cache: new InMemoryCache(),
})
export const getJobsQuery = gql`
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
    // const data = await client.request(query);
    // const {data} = await apolloClient.query({query})
    // console.log('data',data)
    return query;
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
      let data 
      try {
     data = await client.request(query, {id});

      } catch(e) {
        console.log(e)
      }
    return data;
}

export const createJob = gql`
    mutation($title: String, $description: String) {
      createJob(title: $title, description: $description) {
        title
        description
      }
    } `;


export async function deleteJob(id) {
  const query = gql`
    mutation($id: ID!) {
      deleteJob(id: $id) {
        title
        description
      }
    } `;
  const data = await client.request(query, {id});
  // const {data} = await apolloClient({query, id})
  return data;
}

export const getJobsPageQuery = gql`
query($limit: Int, $myCursor: Int)  {
  jobpages(limit: $limit, myCursor: $myCursor) {
      id
      title
      description
      date
      company {
        title
      }
    }
  }`;