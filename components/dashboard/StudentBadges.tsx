'use client'

import { Trophy, Award, Star, Medal } from 'lucide-react'

const badges = [
  {
    id: '1',
    title: 'Math Master',
    description: 'Completed 10 math assignments with 90%+ score',
    icon: Trophy,
    earnedDate: '2024-01-10',
    rarity: 'gold',
  },
  {
    id: '2',
    title: 'Quick Learner',
    description: 'Completed 5 lessons in one week',
    icon: Star,
    earnedDate: '2024-01-08',
    rarity: 'silver',
  },
  {
    id: '3',
    title: 'Consistent Performer',
    description: 'Maintained 85%+ average for 3 months',
    icon: Award,
    earnedDate: '2024-01-05',
    rarity: 'bronze',
  },
  {
    id: '4',
    title: 'Physics Explorer',
    description: 'Completed all physics labs',
    icon: Medal,
    earnedDate: '2024-01-03',
    rarity: 'gold',
  },
]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'gold':
      return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-600'
    case 'silver':
      return 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600'
    case 'bronze':
      return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-600'
    default:
      return 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-600'
  }
}

export default function StudentBadges() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          My Badges
        </h3>
        <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {badges.map((badge) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.id}
              className={`p-4 rounded-lg border-2 ${getRarityColor(badge.rarity)}`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-full">
                  <Icon className="h-6 w-6 text-current" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{badge.title}</h4>
                  <p className="text-xs opacity-80 mt-1">{badge.description}</p>
                  <p className="text-xs opacity-60 mt-1">Earned: {badge.earnedDate}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-600">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>Total Badges: {badges.length}</span>
          <span>Next Badge: Chemistry Champion</span>
        </div>
      </div>
    </div>
  )
}