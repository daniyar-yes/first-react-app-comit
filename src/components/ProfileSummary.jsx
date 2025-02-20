/* eslint-disable react/prop-types */

const ProfileSummary = ({ data }) => {

  return (
    <section className="profile-summary">
      { data?.imageData ?
        <div className="profile-picture">
        <img src={data?.imageData?.imgSrc} alt={data?.imageData?.alt} />
      </div> :
      <p style={{border: '3px solid pink'}}>Imagedata is missing</p>
      }
      <div className="profile-description">
        <h2>{data.userData.name}</h2>
        <p>{data.userData.bio}</p>
      </div>
    </section>
  );
};

export default ProfileSummary;
