import React, { memo } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

/**
 * Enterprise Presentation Card Architecture.
 * Optimized via React.memo to cache rendering profiles and eliminate redundant parent re-renders.
 */
const Player = memo(({ name, team, nationality, jerseyNumber, age, image }) => {
    
    // Explicit null-safety validation guards for all incoming asset properties
    const displayName = name || "Unknown Athlete";
    const displayTeam = team || "Free Agent";
    const displayNation = nationality || "International";
    const displayJersey = jerseyNumber !== undefined && jerseyNumber !== null ? jerseyNumber : "--";
    const displayAge = age !== undefined && age !== null ? age : "N/A";
    const displayImage = image || "https://placehold.co";

    return (
        <Card 
            className="hover-action-card border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-white"
            style={{ width: "100%", margin: "0" }}
        >
            <div className="bg-light p-3 d-flex justify-content-center align-items-center position-relative">
                <Card.Img 
                    variant="top" 
                    src={displayImage} 
                    alt={`Official athletic profile layout for ${displayName}`}
                    className="img-fluid rounded shadow-sm border border-2 border-white"
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <span className="position-absolute top-0 start-0 m-3 badge rounded-pill bg-dark fs-6 fw-bold">
                    #{displayJersey}
                </span>
            </div>
            <Card.Body className="p-4 text-start d-flex flex-column justify-content-between">
                <header className="mb-3">
                    <Card.Title className="h4 fw-bold mb-1 text-dark text-truncate">
                        {displayName}
                    </Card.Title>
                </header>
                <div className="border-top pt-3 text-muted small mb-0 w-100">
                    <div className="d-flex justify-content-between mb-1">
                        <span className="fw-semibold">Club Team:</span>
                        <span className="text-dark text-truncate max-w-120">{displayTeam}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="fw-semibold">Nationality:</span>
                        <span className="text-dark text-truncate max-w-120">{displayNation}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Age Metric:</span>
                        <span className="text-dark fw-bold">{displayAge} Yrs</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
});

Player.displayName = "Player";

// =========================================================================
// STRICT RUNTIME TYPE SCHEMA EXCLUSIONS
// =========================================================================
Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string
};

// Enforce standard enterprise default assignments to ensure absolute execution safety
Player.defaultProps = {
    name: "Unknown Athlete",
    team: "Free Agent",
    nationality: "International",
    jerseyNumber: 0,
    age: 0,
    image: "https://placehold.co"
};

export default Player;
