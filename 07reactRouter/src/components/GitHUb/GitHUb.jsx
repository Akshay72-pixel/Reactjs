import React, { useEffect } from 'react'

function GitHUb() {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
          .then((response) => response.json() )
          .then(data => {
            console.log(data);
            setData(data)
          })
    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>GitHUb Followers: {data.followers} 
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default GitHUb