import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useSiteMetadata } from "@/hooks/use-site-metadata";
import { useFeaturedPublications } from "@/hooks/use-publications"
import { useImage } from "@/hooks/use-image";


const ImagePlaceholder = ({ imageData, alt }) => {
    if (imageData) {
        return (
            <GatsbyImage 
                image={imageData} 
                alt={alt} 
                className="object-cover mx-auto w-full h-auto sm:w-60 sm:h-40"
            />
        )
    }
    return (
        <div className="bg-gray-200 flex items-center justify-center mx-auto w-full h-auto sm:w-60 sm:h-40 object-cover">
            <span className="text-sm text-gray-500">No Image</span>
        </div>
    )
}

const LinkButton = ({ url, text }) => url && (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="outline" className="text-xs py-1.5 h-auto leading-none min-h-0">{text}</Button>
    </a>
)

const PublicationItem = ({ title, authors, date, publication, image, url_pdf, url_code, url_bibtex, profile }) => {
    const imageData = getImage(useImage(image))

    return (
        <Card className="w-full p-4 mb-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <ImagePlaceholder imageData={imageData} alt={title} />

                <div className="flex-1 flex flex-col justify-between min-h-full">
                    <div className="flex-1 flex flex-col justify-evenly">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-gray-600">
                            {authors.map((author, index) => (
                                <span key={index}>
                                    {author === profile.authorName ? (
                                        <span className="font-bold">{profile.name}</span>
                                    ) : (
                                        <span>{author}</span>
                                    )}
                                    {index < authors.length - 1 && ", "}
                                </span>
                            ))}
                        </p>
                        <p className="text-sm italic text-gray-500">
                            {publication}, {new Date(date).getFullYear()}
                        </p>
                    </div>
                    <div className="flex space-x-2 mt-auto">
                        <LinkButton url={url_pdf} text={"PDF"} />
                        <LinkButton url={url_code} text={"Code"} />
                        <LinkButton url={url_bibtex} text={"BibTex"} />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export const Publications = () => {
    const publications = useFeaturedPublications()
    const { profile } = useSiteMetadata()

    return (
        <section id="publications" className="target-scroll">
            <h2 className="text-2xl font-bold mb-4"> Selected Publications </h2>
            {publications.map(publication => (
                <PublicationItem key={publication.id} {...publication.frontmatter} profile={profile} />
            ))}
        </section>
    )
}