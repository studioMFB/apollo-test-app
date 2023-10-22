import { useQuery, gql } from '@apollo/client';
import client from './../lib/client';


const GET_CUSTOMER = gql`
  query getCustomer($forename: String) {
    customer(forename: $forename) {
      forename
      surname
      email
    }
  }
`;

export default function Home() {
  // This query is executed at run time by Apollo.
  const { loading, error, data } = useQuery(GET_CUSTOMER, {
    variables: { forename: 'John', email: null },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Render data from GraphQL server
  return (
    <div>
      <h1>Customer Information</h1>
      {data.customer && (
        <div>
          <p>Forename: {data.customer.forename}</p>
          <p>Surname: {data.customer.surname}</p>
          <p>Email: {data.customer.email}</p>
        </div>
      )}
    </div>
  );
}

// Fetching data at build time
export async function getStaticProps() {
  // Execute the query at build time to pre-render the page
  const { data } = await client.query({
    query: GET_CUSTOMER,
    variables: { forename: 'John', email: null },
  });

  return {
    props: {
      // Pass data to the page via props
      customer: data.customer,
    },
  };
}