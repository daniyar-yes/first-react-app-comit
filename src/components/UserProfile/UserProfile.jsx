/* eslint-disable react/prop-types */
const UserProfile = ({ data }) => {

    console.log(data);
    
    return (
        
       <>
        {data.age}
        {data.name.title}
        {data.name.first}
        {data.name.last}
        {data.id}
       </>
    )
}

export default UserProfile;