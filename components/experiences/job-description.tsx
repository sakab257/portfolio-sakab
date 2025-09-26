import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pointer } from 'lucide-react'
import GridJob from '../ui/grid-job'

interface CompanyProps {
    title?: string,
    company?: string,
    description?: string,
}

const JobDescription = ({title, company, description}:CompanyProps) => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='bg-[#F18E78] rotate-45 w-20 h-20 p-4 border-2 border-black shadow-[4px_-4px_0px_0px_#000] flex items-center justify-center relative cursor-pointer  transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none'>
                <Pointer className='-rotate-45 size-8'/>
            </div>
        </DialogTrigger>
        <DialogContent>
            <GridJob />
            <DialogHeader>
            <DialogTitle className='whitespace-pre-line'>{title}</DialogTitle>
            <DialogTitle className='text-xs'>{company}</DialogTitle>
            <DialogDescription className='whitespace-pre-line w-60 text-left mx-auto'>
                {description}
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default JobDescription