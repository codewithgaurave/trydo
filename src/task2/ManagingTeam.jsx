import React from 'react';
import './Managingteam.css';

const teamMembers = [
  { id: 1, name: 'Jone Due', role: 'Sr. Web Developer', img: 'https://rainbowit.net/html/trydo/assets/images/team/team-01.jpg', social: ['facebook', 'linkedin', 'twitter'] },
  { id: 2, name: 'Fatima Asrafi', role: 'Front-end Engineer', img: 'https://rainbowit.net/html/trydo/assets/images/team/team-03.jpg', social: ['facebook', 'linkedin','twitter'] },
  { id: 3, name: 'John Dou', role: 'Sr. Graphic Designer', img: 'https://rainbowit.net/html/trydo/assets/images/team/team-03.jpg', social: ['facebook', 'linkedin', 'twitter'] },
  { id: 4, name: 'Jone Due', role: 'Sr. Web Developer', img: 'https://rainbowit.net/html/trydo/assets/images/team/team-06.jpg', social: ['facebook', 'linkedin', 'twitter'] }
];

const ManagingTeam = () => {
  return (
    <section className="managing-team-container">
      <h2>Managing Team</h2>
      <p className="description">There are many variations of passages of Lorem Ipsum available, <br/>but the majority have suffered alteration.</p>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member-card">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-icons">
              {member.social.includes('facebook') && <a href="#"><i class="ri-facebook-circle-fill"></i></a>}
              {member.social.includes('linkedin') && <a href="#"><i class="ri-linkedin-box-fill"></i></a>}
              {member.social.includes('twitter') && <a href="#"><i class="ri-twitter-fill"></i></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagingTeam;
