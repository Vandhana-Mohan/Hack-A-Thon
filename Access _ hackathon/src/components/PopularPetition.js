import React from "react";

const PopularPetition = () => {
  return (
    <div className="container mt-4 mb-5">
      {" "}
      {/* Added mb-5 class for bottom margin */}
      <h3 className="text-center">Popular Petitions</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <h5>
            Concern about the Increasing Homeless Presence in the Community
          </h5>
          <p className="text-secondary">70,000 signatures in the last hour</p>
        </li>
        <li className="list-group-item">
          <h5>Seeking Support to Tackle Gentrification's Impact</h5>
          <p className="text-secondary">8192 signatures in the last hour</p>
        </li>
        <li className="list-group-item">
          <h5>Concerns about Building Infrastructure Degradation</h5>
          <p className="text-secondary">372 signatures in the last hour</p>
        </li>
        <li className="list-group-item">
          <h5>Addressing Pest Infestations in NYCHA Housing</h5>
          <p className="text-secondary">2339 signatures in the last hour</p>
        </li>
      </ul>
    </div>
  );
};

export default PopularPetition;
