import { useMutation } from '@apollo/client';
import { createJob } from '../lib/graphql/queries';

export default function useCreateJob() {
    const [mutate] = useMutation(createJob)
return {mutate}
}