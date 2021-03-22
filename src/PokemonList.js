import React from 'react'

export default function PokemonList({pokemon}) {
    return (
        <div className="container row">
            <div className="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Pokemon List</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.map(p => (
                        <tr>
                            <td><div key={p}>{p}</div></td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
    )
}
