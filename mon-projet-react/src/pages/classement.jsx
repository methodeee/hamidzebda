import { useEffect, useState } from 'react'
import axios from 'axios'

function Classement() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const apikey = '8e6531b9dbd66cdee588a3b603b79a30'
  const apiurl = 'https://v3.football.api-sports.io/standings'

  useEffect(() => {
    axios.get(apiurl, {
      params: {
        league: 140, // La Liga (Espagne)
        season: 2023
      },
      headers: {
        'x-apisports-key': apikey
      }
    })
    .then(res => {
      console.log("Réponse API complète :", res.data)
      const standings = res.data.response?.[0]?.league?.standings?.[0]
      if (standings) {
        setTeams(standings)
      } else {
        setError("Aucune donnée disponible.")
      }
      setLoading(false)
    })
    .catch(err => {
      console.error('Erreur API:', err)
      setError("Impossible de charger les données.")
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h2>Classement - La Liga 2023</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Équipe</th>
            <th>Pts</th>
            <th>J</th>
            <th>G</th>
            <th>N</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.team.id}>
              <td>{team.rank}</td>
              <td>
                <img src={team.team.logo} alt="logo" width="20" /> {team.team.name}
              </td>
              <td>{team.points}</td>
              <td>{team.all.played}</td>
              <td>{team.all.win}</td>
              <td>{team.all.draw}</td>
              <td>{team.all.lose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Classement
