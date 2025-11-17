import { useState } from 'react';

const TimetablePage = () => {
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterRoom, setFilterRoom] = useState('all');

  const subjects = {
    math: { name: 'Mathématiques', color: 'bg-blue-500', textColor: 'text-white' },
    physics: { name: 'Physique', color: 'bg-purple-500', textColor: 'text-white' },
    english: { name: 'Anglais', color: 'bg-green-500', textColor: 'text-white' },
    french: { name: 'Français', color: 'bg-orange-500', textColor: 'text-white' }
  };

  const timeSlots = {
    monday: [
      { time: '17:00-19:00', duration: '2h' }
    ],
    tuesday: [
      { time: '17:00-19:00', duration: '2h' }
    ],
    wednesday: [
      { time: '17:00-19:00', duration: '2h' }
    ],
    thursday: [
      { time: '17:00-19:00', duration: '2h' }
    ],
    friday: [
      { time: '14:00-16:00', duration: '2h' },
      { time: '16:15-18:15', duration: '2h' }
    ],
    saturday: [
      { time: '14:00-16:00', duration: '2h' },
      { time: '16:15-18:15', duration: '2h' }
    ],
    sunday: [
      { time: '09:00-11:00', duration: '2h' },
      { time: '11:15-13:15', duration: '2h' }
    ]
  };

  const schedule = [
    // MONDAY - 2 Rooms only
    { day: 'monday', time: '17:00-19:00', room: 'Salle 1', group: '1ère A', subject: 'math', grade: '1ère' },
    { day: 'monday', time: '17:00-19:00', room: 'Salle 2', group: '2ème A', subject: 'physics', grade: '2ème' },

    // TUESDAY - 2 Rooms only
    { day: 'tuesday', time: '17:00-19:00', room: 'Salle 1', group: '1ère B', subject: 'french', grade: '1ère' },
    { day: 'tuesday', time: '17:00-19:00', room: 'Salle 2', group: '3ème A', subject: 'english', grade: '3ème' },

    // WEDNESDAY - 2 Rooms only
    { day: 'wednesday', time: '17:00-19:00', room: 'Salle 1', group: '2ème B', subject: 'math', grade: '2ème' },
    { day: 'wednesday', time: '17:00-19:00', room: 'Salle 2', group: '1ère A', subject: 'english', grade: '1ère' },

    // THURSDAY - 2 Rooms only
    { day: 'thursday', time: '17:00-19:00', room: 'Salle 1', group: '3ème B', subject: 'physics', grade: '3ème' },
    { day: 'thursday', time: '17:00-19:00', room: 'Salle 2', group: '2ème A', subject: 'french', grade: '2ème' },

    // FRIDAY - Session 1 (2 Rooms)
    { day: 'friday', time: '14:00-16:00', room: 'Salle 1', group: '1ère B', subject: 'physics', grade: '1ère' },
    { day: 'friday', time: '14:00-16:00', room: 'Salle 2', group: '2ème B', subject: 'english', grade: '2ème' },

    // FRIDAY - Session 2 (2 Rooms)
    { day: 'friday', time: '16:15-18:15', room: 'Salle 1', group: '3ème A', subject: 'math', grade: '3ème' },
    { day: 'friday', time: '16:15-18:15', room: 'Salle 2', group: '1ère A', subject: 'physics', grade: '1ère' },

    // SATURDAY - Session 1 (2 Rooms)
    { day: 'saturday', time: '14:00-16:00', room: 'Salle 1', group: '2ème A', subject: 'math', grade: '2ème' },
    { day: 'saturday', time: '14:00-16:00', room: 'Salle 2', group: '3ème B', subject: 'french', grade: '3ème' },

    // SATURDAY - Session 2 (2 Rooms)
    { day: 'saturday', time: '16:15-18:15', room: 'Salle 1', group: '1ère B', subject: 'english', grade: '1ère' },
    { day: 'saturday', time: '16:15-18:15', room: 'Salle 2', group: '2ème B', subject: 'physics', grade: '2ème' },

    // SUNDAY - Session 1 (2 Rooms)
    { day: 'sunday', time: '09:00-11:00', room: 'Salle 1', group: '3ème A', subject: 'french', grade: '3ème' },
    { day: 'sunday', time: '09:00-11:00', room: 'Salle 2', group: '1ère A', subject: 'french', grade: '1ère' },

    // SUNDAY - Session 2 (2 Rooms)
    { day: 'sunday', time: '11:15-13:15', room: 'Salle 1', group: '3ème B', subject: 'english', grade: '3ème' },
    { day: 'sunday', time: '11:15-13:15', room: 'Salle 2', group: '2ème B', subject: 'french', grade: '2ème' }
  ];

  const days = [
    { key: 'monday', label: 'Lundi' },
    { key: 'tuesday', label: 'Mardi' },
    { key: 'wednesday', label: 'Mercredi' },
    { key: 'thursday', label: 'Jeudi' },
    { key: 'friday', label: 'Vendredi' },
    { key: 'saturday', label: 'Samedi' },
    { key: 'sunday', label: 'Dimanche' }
  ];

  const filteredSchedule = schedule.filter(item => {
    if (filterGrade !== 'all' && item.grade !== filterGrade) return false;
    if (filterSubject !== 'all' && item.subject !== filterSubject) return false;
    if (filterRoom !== 'all' && item.room !== filterRoom) return false;
    return true;
  });

  const getScheduleForDayTimeRoom = (day, time, room) => {
    return filteredSchedule.find(
      item => item.day === day && item.time === time && item.room === room
    );
  };

  const rooms = ['Salle 1', 'Salle 2'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">SmartHub - Planning Hebdomadaire</h1>
          <p className="text-gray-600 mb-3">Programme de Soutien Scolaire Coordonné - Secondaire</p>
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg p-4 mb-4">
            <p className="text-2xl font-bold">🎓 Offre 4 matières pour 170 DT/mois SEULEMENT</p>
            <p className="text-sm mt-2 opacity-90">Mathématiques • Physique • Anglais • Français</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="text-sm">
              <span className="font-semibold">6 Groupes</span> •
              <span className="ml-2">4 Matières</span> •
              <span className="ml-2">8 heures par semaine</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filtres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Niveau</label>
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tous les niveaux</option>
                <option value="1ère">1ère Année</option>
                <option value="2ème">2ème Année</option>
                <option value="3ème">3ème Année (BAC)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Matière</label>
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Toutes les matières</option>
                <option value="math">Mathématiques</option>
                <option value="physics">Physique</option>
                <option value="english">Anglais</option>
                <option value="french">Français</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salle</label>
              <select
                value={filterRoom}
                onChange={(e) => setFilterRoom(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Toutes les salles</option>
                <option value="Salle 1">Salle 1</option>
                <option value="Salle 2">Salle 2</option>
              </select>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Légende des matières</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(subjects).map(([key, subject]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${subject.color}`}></div>
                  <span className="text-sm text-gray-700">{subject.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timetable */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 sticky left-0 bg-gray-100 z-10">
                    Jour / Heure
                  </th>
                  {rooms.map(room => (
                    <th key={room} className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                      {room}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {days.map(day => {
                  const daySlots = timeSlots[day.key];
                  return daySlots.map((slot, slotIndex) => (
                    <tr key={`${day.key}-${slotIndex}`} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-700 sticky left-0 bg-white z-10 border-r border-gray-200">
                        <div className="font-semibold">{day.label}</div>
                        <div className="text-xs text-gray-500">{slot.time}</div>
                      </td>
                      {rooms.map(room => {
                        const session = getScheduleForDayTimeRoom(day.key, slot.time, room);
                        return (
                          <td key={room} className="px-2 py-2">
                            {session ? (
                              <div className={`${subjects[session.subject].color} ${subjects[session.subject].textColor} rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow`}>
                                <div className="font-semibold text-sm">{session.group}</div>
                                <div className="text-xs mt-1 opacity-90">{subjects[session.subject].name}</div>
                                <div className="text-xs mt-1 opacity-75">{slot.duration}</div>
                              </div>
                            ) : (
                              <div className="text-center text-gray-400 text-sm py-3">
                                -
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-blue-600">
              {filteredSchedule.length}
            </div>
            <div className="text-sm text-gray-600">Sessions affichées</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-green-600">
              {new Set(filteredSchedule.map(s => s.group)).size}
            </div>
            <div className="text-sm text-gray-600">Groupes actifs</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(filteredSchedule.map(s => s.subject)).size}
            </div>
            <div className="text-sm text-gray-600">Matières couvertes</div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-orange-600">
              {new Set(filteredSchedule.map(s => s.room)).size}
            </div>
            <div className="text-sm text-gray-600">Salles utilisées</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600 bg-white rounded-lg shadow p-4">
          <p>SmartHub - ELMAOUIA ET.CO • 13 Rue de Belgique, Tunis Centre</p>
          <p className="mt-1">Contact: 99 73 01 44</p>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
