import React, { Component, memo } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// =========================================================================
// 1. DATA MODEL SCHEMA VALIDATION MATRIX
// =========================================================================

/**
 * Mocking a strict static data array layer to simulate an internal file import (e.g., players.js)
 * Implements fallback tracking values to protect the layout against incomplete server payloads.
 */
const SYSTEM_PLAYER_REGISTRY = [
    { id: 1, name: "Lionel Messi", position: "RW", rating: 93, nationality: "Argentina", team: "Inter Miami", image: "https://placehold.co" },
    { id: 2, name: "Cristiano Ronaldo", position: "ST", rating: 90, nationality: "Portugal", team: "Al Nassr", image: "https://placehold.co" },
    { id: 3, name: "Kylian Mbappé", position: "ST", rating: 91, nationality: "France", team: "Real Madrid", image: "https://placehold.co" },
    { id: 4, name: "Kevin De Bruyne", position: "CM", rating: 91, nationality: "Belgium", team: "Manchester City", image: "https://placehold.co" }
];

// =========================================================================
// 2. ISOLATED ZERO-CRASH RUNTIME SANDBOX LAYER
// =========================================================================

/**
 * Enterprise React Error Boundary Middleware.
 * Intercepts unhandled data rendering execution panics inside downstream child components,
 * preventing a local syntax or field crash from bringing down the entire browser window interface.
 */
class PlayerListErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, runtimeException: "" };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, runtimeException: error?.message || "Internal metadata serialization fault." };
    }

    componentDidCatch(error, errorInfo) {
        console.error("── [CRITICAL CORE FAULT DETECTED] ──");
        console.error("Exception:", error);
        console.error("Stack Trace Mapping Context:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <section className="container text-center my-5 p-5 border border-danger rounded bg-light shadow-sm" aria-live="assertive">
                    <h2 className="text-danger fw-bold mb-3">Application Exception Intercepted</h2>
                    <p className="text-muted fs-5">The presentation layer could not safely process the player roster array data metrics.</p>
                    <div className="text-start bg-white p-3 border rounded font-monospace my-4">
                        <code className="text-dark small d-block">Runtime Context Error: {this.state.runtimeException}</code>
                    </div>
                    <button 
                        className="btn btn-outline-danger px-4 py-2 fw-semibold"
                        onClick={() => window.location.reload()}
                    >
                        Force Pipeline Clean Reset
                    </button>
                </section>
            );
        }
        return this.props.children;
    }
}

PlayerListErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

// =========================================================================
// 3. OPTIMIZED DISPLAY COMPONENT (MEMOIZED PRESENTATION MODULE)
// =========================================================================

/**
 * Pure Functional Presentation Card Component.
 * Wrapped inside React.memo to completely bypass redundant parent structural re-renders,
 * enforcing optimized memory allocations and stable frame-rate execution thresholds.
 */
const PlayerCard = memo(({ player }) => {
    if (!player) return null;

    // Strict validation safety fallbacks for individual data properties
    const displayName = player.name || "Unknown Operator";
    const displayPosition = player.position || "SUB";
    const displayRating = player.rating || 0;
    const displayTeam = player.team || "Free Agent";
    const displayNation = player.nationality || "International";
    const displayImage = player.image || "https://placehold.co";

    // Set conditional color metrics based on rating performance fields
    const ratingBadgeColor = displayRating >= 90 ? "bg-warning text-dark" : "bg-primary text-white";

    return (
        <article className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center bg-white hover-action-card transition-all">
                <div className="position-relative bg-light p-3 d-flex justify-content-center align-items-center">
                    <img 
                        src={displayImage} 
                        className="img-fluid rounded shadow-sm border border-2 border-white" 
                        alt={`Official athletic tracking configuration layout for ${displayName}`}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <span className={`position-absolute top-0 start-0 m-3 badge rounded-pill fs-5 fw-bold ${ratingBadgeColor}`}>
                        {displayRating}
                    </span>
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <header>
                        <h2 className="card-title h4 fw-bold mb-1 text-dark text-truncate">{displayName}</h2>
                        <span className="badge bg-secondary mb-3 text-uppercase tracking-wider px-3 py-1 fs-7">
                            {displayPosition}
                        </span>
                    </header>
                    <footer className="card-text border-top pt-3 mt-auto">
                        <div className="d-flex justify-content-between small text-muted mb-1">
                            <span className="fw-semibold">Club:</span>
                            <span className="text-dark text-truncate max-w-120">{displayTeam}</span>
                        </div>
                        <div className="d-flex justify-content-between small text-muted">
                            <span className="fw-semibold">Nation:</span>
                            <span className="text-dark text-truncate max-w-120">{displayNation}</span>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    );
});

PlayerCard.displayName = "PlayerCard";
PlayerCard.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        position: PropTypes.string,
        rating: PropTypes.number,
        nationality: PropTypes.string,
        team: PropTypes.string,
        image: PropTypes.string
    }).isRequired
};

// =========================================================================
// 4. MAIN ORCHESTRATION ROSTER LIST MANAGER COMPONENT
// =========================================================================

/**
 * Controller class execution component loop that handles formatting operations,
 * checking data array sizes before committing rendering routines to the view engine.
 */
const PlayerList = () => {
    // Structural Data Array Validation Guard Checks
    if (!Array.isArray(SYSTEM_PLAYER_REGISTRY) || SYSTEM_PLAYER_REGISTRY.length === 0) {
        return (
            <div className="text-center py-5 my-5 bg-white rounded shadow-sm border border-dashed" role="status">
                <p className="text-muted fs-5 mb-0">No active player configuration matrices found inside storage directories.</p>
            </div>
        );
    }

    return (
        <div className="row g-4 justify-content-center">
            {SYSTEM_PLAYER_REGISTRY.map((player) => (
                <PlayerCard 
                    // Enforces dynamic lookup stability via explicit, unique numeric database indexes
                    key={player.id} 
                    player={player} 
                />
            ))}
        </div>
    );
};

// =========================================================================
// 5. ROOT ENTRY FRAMEWORK APP COMPONENT
// =========================================================================

/**
 * Main application initialization pipeline framework entry structure.
 */
function App() {
    return (
        <div className="min-vh-100 bg-light-gray py-5 font-sans-serif">
            <div className="container">
                <header className="row mb-5 text-center">
                    <div className="col-12 mx-auto max-w-600">
                        <h1 className="app-title display-4 fw-extrabold text-dark tracking-tight mb-2">
                            FIFA Player Cards
                        </h1>
                        <p className="text-muted fs-5 mb-0 fw-normal">
                            Production-Grade Full-Stack Roster Matrix Data Interface.
                        </p>
                        <div className="divider-line bg-primary mx-auto my-3" style={{ height: "4px", width: "60px", borderRadius: "2px" }}></div>
                    </div>
                </header>

                <main>
                    {/* Strict Defensive Architecture Isolation Fencing Wrapper */}
                    <PlayerListErrorBoundary>
                        <PlayerList />
                    </PlayerListErrorBoundary>
                </main>
            </div>
        </div>
    );
}

export default App;
