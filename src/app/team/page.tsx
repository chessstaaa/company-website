import React from 'react'
import MainTeam from './components/MainTeam'
import Navbar from '@/components/Navbar'
import Driver from './components/Driver'
import MemberTeam from './components/MemberTeam'
import Sponsor from '@/components/Sponsor'
import Footer from '@/components/Footer'
import TeamCulture from './components/TeamCulture'
import OtherTeamMember from './components/OtherTeamMember'

const page = () => {
  return (
    <div>
        < Navbar />
        < MainTeam />
        < Driver />
        < MemberTeam />
        < OtherTeamMember />
        < TeamCulture />
        < Sponsor />
        < Footer />
    </div>
  )
}

export default page