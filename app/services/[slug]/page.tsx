"use client"
import MachineLearningPage from '@/components/pages/services/service_pages/ai-integration'
import DevOpsInfrastructurePage from '@/components/pages/services/service_pages/devops'
import DigitalStrategyPage from '@/components/pages/services/service_pages/digital-strategy'
import MobileDevelopmentPage from '@/components/pages/services/service_pages/mobile-development'
import UIUXDesignPage from '@/components/pages/services/service_pages/ui-ux'
import WebDevelopmentPage from '@/components/pages/services/service_pages/web-development'
import { Loader2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useMemo, useState } from 'react'

type Props = {}

export default function ServicesAbstractor() {
    const params = useParams()
    const currentSlug = useMemo(()=>{
        return params.slug
    },[params])

  switch(currentSlug){
    case "web-development":
        return <WebDevelopmentPage/>
    case "mobile-development":
        return <MobileDevelopmentPage/>
    case "cloud-solutions":
        return <DevOpsInfrastructurePage/>
    case "ai-integration":
        return <MachineLearningPage/>
    case "ui-ux-design":
        return <UIUXDesignPage/>
    case "digital-strategy":
        return <DigitalStrategyPage/>
    default:
        return (<div className='h-svh w-[svw] flex items-center justify-center'>
            <Loader2 className='animate-spin'/>
        </div>)
  }
}