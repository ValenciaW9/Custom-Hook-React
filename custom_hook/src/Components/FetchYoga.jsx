import UseFetch from './UseFetch';

const FetchYogaData = () => {
  const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');

  console.log(data); // Check if data is coming in the console

  return (
    <>
      <ul className="list_data_main">
        {data && data.map(item => (
          <li key={item.id}>{item.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </>
  );
};

export default FetchYogaData;
