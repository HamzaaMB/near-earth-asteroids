import React from 'react'
import { NearEarthObject } from '../../interfaces'

interface FavoritesPageProps {
  favorites: NearEarthObject[]
}

const FavoritesPage = ({ favorites }: FavoritesPageProps) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {favorites.map((fav) => (
            <div key={fav.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <h2>{fav.name}</h2>
              <p>
                <strong>Absolute Magnitude:</strong> {fav.absolute_magnitude_h}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
