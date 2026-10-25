import React, { memo } from "react";
import Player from "./Player";
import players from "./players";

/**
 * Enterprise Roster Orchestration Controller Module.
 * Validates array structures and enforces explicit parameter structures to optimize tracking.
 */
const PlayerList = memo(() => {
    // Structural Data Array Validation Guard
    if (!Array.isArray(players) || players.length === 0) {
        return (
            <div className="text-center py-5 my-5 bg-white rounded shadow-sm border border-dashed" role="status">
                <p className="text-muted fs-5 mb-0">No active player configuration profiles could be resolved in storage.</p>
            </div>
        );
    }

    return (
        <div className="row g-4 justify-content-center" aria-label="FIFA Player Roster Grid">
            {players.map((playerItem, index) => {
                // Generate a stable unique key identifier to back the rendering pipeline
                const uniqueTrackingId = playerItem?.id || `player-index-track-${index}`;

                return (
                    <Player
                        // Enforces deterministic indexing to ensure lightning-fast DOM rendering
                        key={uniqueTrackingId}
                        // Explicit Parameter Mapping: Safeguards against raw object spreads
                        name={playerItem?.name}
                        team={playerItem?.team}
                        nationality={playerItem?.nationality}
                        jerseyNumber={playerItem?.jerseyNumber}
                        age={playerItem?.age}
                        image={playerItem?.image}
                    />
                );
            })}
        </div>
    );
});

PlayerList.displayName = "PlayerList";

export default PlayerList;
