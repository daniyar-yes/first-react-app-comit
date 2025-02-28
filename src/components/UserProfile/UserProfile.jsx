/* eslint-disable react/prop-types */
const UserProfile = ({ data }) => {

    const fullName = `${data.name.title} ${data.name.first} ${data.name.last}`

    return (
       <>
        {fullName}
       </>
    )
}

export default UserProfile;