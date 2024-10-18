import * as React from "react"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { useSiteMetadata } from "@/hooks/use-site-metadata";

export const ProfileCard = () => {
  const { profile } = useSiteMetadata()

  return (
    <Card className="p-2">
      <CardContent className="text-center py-4">
        <Avatar className="w-32 h-32 mx-auto rounded-lg">
          <AvatarImage src={profile.avatar} alt={`Avatar`} />
        </Avatar>
        <h2 className="text-lg font-bold mt-2"> {profile.name} </h2>
        <p className="text-sm text-gray-600 mt-1"> {profile.role} </p>
        <p className="mt-1"> {profile.affiliation} </p>
        <div className="flex justify-center mt-2 space-x-4">
          {profile.socialLinks.map((link, index) => {
            const icon = link.icon || 'FaQuestion'
            const IconComponent = FaIcons[icon] || SiIcons[icon] || FaIcons['FaQuestion']
            return (
              link.url && (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent size={20} />
                </a>
              )
            );
          })}
        </div>
      </CardContent>
    </Card>
  )
}