'use client'

import {useEffect} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {cn} from '@/lib/utils'
import {LucideIcon} from "lucide-react";

interface SpotlightCardProps {
    icon: LucideIcon
    title: string | string[]
    description: string
    status?: 'live' | 'beta' | 'coming-soon'
    className?: string
    bgColor?: string
    iconColor?: string
    spotlightColor?: string
}

export const SpotlightCard = ({
                                  icon: Icon,
                                  title,
                                  description,
                                  status = 'live',
                                  className,
                                  bgColor = 'bg-sky-500/10',
                                  iconColor = 'text-sky-500',
                                  spotlightColor = 'bg-sky-600/40 dark:bg-sky-400/40'
                              }: SpotlightCardProps) => {
    useEffect(() => {
        const all = document.querySelectorAll('.spotlight-card')

        const handleMouseMove = (ev: MouseEvent) => {
            for (const e of all) {
                const blob = e.querySelector('.blob') as HTMLElement
                const fblob = e.querySelector('.fake-blob') as HTMLElement

                if (!blob || !fblob) continue

                const rec = fblob.getBoundingClientRect()

                blob.style.opacity = '1'

                blob.animate(
                    [
                        {
                            transform: `translate(${
                                ev.clientX - rec.left - rec.width / 2
                            }px, ${ev.clientY - rec.top - rec.height / 2}px)`
                        }
                    ],
                    {
                        duration: 300,
                        fill: 'forwards'
                    }
                )
            }
        }

        globalThis.addEventListener('mousemove', handleMouseMove)

        return () => {
            globalThis.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const statusVariants = {
        live: 'bg-green-500/10 text-green-500 border-green-500/20',
        beta: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        'coming-soon': 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    }

    const statusLabels = {
        live: 'Live',
        beta: 'Beta',
        'coming-soon': 'Coming Soon'
    }

    return (
        <div className={cn('h-full w-full flex', className)}>
            <div
                className='spotlight-card group bg-border relative overflow-hidden rounded-2xl p-px transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col flex-1'>
                <Card
                    className='group-hover:bg-card/90 h-full border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px] flex flex-col flex-1'>
                    <CardHeader className='relative flex-shrink-0'>
                        <div className='flex items-start justify-between mb-4'>
                            <div className={cn('p-3 rounded-xl', bgColor, iconColor)}>
                                <Icon className='w-6 h-6'/>
                            </div>
                            <Badge
                                variant="outline"
                                className={cn(
                                    'text-xs font-medium',
                                    statusVariants[status]
                                )}
                            >
                                {statusLabels[status]}
                            </Badge>
                        </div>
                        <CardTitle className='text-xl min-h-[3.5rem] flex items-center'>
                            {Array.isArray(title) ? (
                                <>
                                    {title[0]}<br/>{title[1]}
                                </>
                            ) : (
                                title
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='flex-1 flex items-start'>
                        <p className='text-muted-foreground text-sm leading-relaxed'>
                            {description}
                        </p>
                    </CardContent>
                </Card>
                <div
                    className={cn('blob absolute top-0 left-0 h-32 w-32 rounded-full opacity-0 blur-3xl transition-all duration-300 ease-in-out', spotlightColor)}/>
                <div className='fake-blob absolute top-0 left-0 h-32 w-32 rounded-full'/>
            </div>
        </div>
    )
}
