import Taro, { useState, useEffect } from '@tarojs/taro';

function graphql<T = any> (query: string, variables: any = {}) {
  return Taro.request({
    url: 'http://localhost:9080/graphql',
    data: {
      variables,
      query
    },
    method: 'POST'
  }).then(data => data.data.data as T)
}

const useQuery = (query: string, variables: any) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await graphql(query, variables)
        setData(result);
      } catch (error) {
        setError(error)
      }
      setLoading(false);
    };
    fetchData();
  }, [variables]);
  return { data, loading, error };
}

export { useQuery, graphql }
