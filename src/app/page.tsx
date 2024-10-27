'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, ThumbsUp, Rocket, Layers, Eye, Users, Shield, ChartBar, Settings, Cpu, Award } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip"
import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const teamMembers = [
  { name: 'Vikram Sinha', role: 'Founder / CEO', description: 'Tech innovator solving real-world problems.', image: 'https://i.pravatar.cc/300?img=1' },
  { name: 'Radhika Iyer', role: 'Chief Strategy Officer', description: 'Drives growth with strategic insights.', image: 'https://i.pravatar.cc/300?img=5' },
  { name: 'Alex Johnson', role: 'CTO', description: 'AI expert leading our tech innovations.', image: 'https://i.pravatar.cc/300?img=3' },
  { name: 'Sarah Lee', role: 'Head of Product', description: 'User-centric product visionary.', image: 'https://i.pravatar.cc/300?img=4' },
  { name: 'Michael Chen', role: 'Lead Data Scientist', description: 'Big data and ML specialist.', image: 'https://i.pravatar.cc/300?img=7' },
  { name: 'Emily Rodriguez', role: 'UX Director', description: 'Creating intuitive user experiences.', image: 'https://i.pravatar.cc/300?img=6' },
  { name: 'David Kim', role: 'Head of Sales', description: 'Building strong client relationships.', image: 'https://i.pravatar.cc/300?img=8' },
]

const values = [
  { icon: <ThumbsUp className="h-10 w-10" />, title: 'Customer Success', description: "'We prioritize our customers' success above all else, ensuring they achieve their hiring goals efficiently.' "},
  { icon: <Rocket className="h-10 w-10" />, title: 'Innovation', description: "'We constantly push the boundaries of what's possible in recruitment technology.' "},
  { icon: <Layers className="h-10 w-10" />, title: 'Simplicity', description: "'We believe in making complex processes simple and user-friendly.' "},
  { icon: <Eye className="h-10 w-10" />, title: 'Transparency', description: "'We maintain open and honest communication with our clients and within our team.' "},
  { icon: <Users className="h-10 w-10" />, title: 'Inclusivity', description: "'We champion diversity and ensure our tools promote fair and unbiased hiring.' "},
  { icon: <Shield className="h-10 w-10" />, title: 'Security', description: "'We prioritize the protection of our clients' data and maintain the highest security standards.' "},
]

const journey = [
  { date: 'Aug 2021', title: 'Everything Talent Founded', icon: <ChartBar />, description: 'Our journey began with a vision to revolutionize the hiring process.' },
  { date: 'Feb 2022', title: 'Launch of AI-Driven Assessments', icon: <Settings />, description: 'We introduced our groundbreaking AI-powered assessment tools.' },
  { date: 'Oct 2022', title: 'Expansion to European Markets', icon: <Cpu />, description: 'Our solutions went global, entering key European markets.' },
  { date: 'May 2023', title: 'Named in CNBC Disruptor 50', icon: <Award />, description: 'Recognition of our innovative approach to recruitment technology.' },
]

// Add loading state for images
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${h}" fill="#f6f7f8"/>
</svg>
`

// Add proper image blur data URL
const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export default function AboutPage() {
  const controls = useAnimation()
  // Add ref for intersection observer
  const ref = useRef(null)
  const isInView = useInView(ref)

  // Add effect to control animations
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-black text-zinc-900 dark:text-white">
      <header role="banner" className="sticky inset-x-0 w-full top-0 z-50 border-b backdrop-blur bg-white dark:bg-[#000000]">
        <nav className="flex items-center w-full h-[54px] md:container justify-between px-6 md:px-8">
          {/* Convert HTML comments to JSX comments */}
          {/* Logo Section */}
          <div className="flex space-x-8">
            <a className="font-bold text-xl" href="/">
              <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black dark:text-white dark:-ml-4 -ml-2">
                {/* Light Mode Logo */}
                <img alt="logo" 
                     className="dark:hidden block h-8 w-8" 
                     src="/logo.webp" 
                     width="40" 
                     height="40" />
                {/* Dark Mode Logo */}
                <img alt="logo" 
                     className="hidden dark:block h-8 w-8" 
                     src="/logo.webp" 
                     width="40" 
                     height="40" />
                <span className="lg:hidden font-bold">Everything Talent</span>
                <span className="hidden font-bold lg:inline-block">Everything Talent</span>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex gap-8 font-medium items-center">
            <li className="font-regular text-gray-600 dark:hover:text-slate-300 dark:text-slate-400 text-sm hover:text-gray-800">
              <a href="/">Home</a>
            </li>
            <li className="font-regular dark:hover:text-slate-300 text-sm hover:text-gray-800 dark:text-white text-gray-950">
              <a href="/about">About</a>
            </li>
            <li className="font-regular text-gray-600 dark:hover:text-slate-300 dark:text-slate-400 text-sm hover:text-gray-800">
              <a href="/pricing">Pricing</a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>

          {/* Right Side Actions */}
          <div className="flex gap-5">
            {/* Theme Toggle Button */}
            <button className="inline-flex items-center justify-center text-sm font-medium h-5 w-5 px-0 text-muted-foreground">
              {/* Sun Icon for Light Mode */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun rotate-0 scale-100 transition-all dark:-rotate-90 hover:text-black dark:scale-0">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              {/* Moon Icon for Dark Mode */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>

            {/* Login Button */}
            <div className="ml-6 hidden lg:block">
              <a className="w-full" href="/login">
                <button className="inline-flex items-center justify-center text-sm font-medium bg-gradient-to-b from-blue-500 to-blue-600 text-white h-10 px-4 py-2 rounded group w-full">
                  Login
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu hover:cursor-pointer lg:hidden -mr-2">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </div>
        </nav>
      </header>

      {/* Add ref to main content for animations */}
      <main role="main" ref={ref}>
        {/* Hero Section - updated styling and layout */}
        <section className="bg-[#000000] py-20 md:py-22 flex items-center justify-center min-h-[80vh]" aria-label="Hero">
          <div className="md:container px-4 sm:px-6 light text-zinc-900 dark:text-white relative max-w-7xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:gap-0 md:gap-12">
              <div>
                <p className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-[2.2rem] lg:text-7xl md:mr-12 md:mt-0 text-center md:w-full mt-12 md:text-left">
                  Everything Talent simplifies hiring with a free ATS and AI-driven assessments.
                </p>
              </div>
              <div className="md:mr-[70px] min-w-80">
                <div className="relative flex justify-center lg:flex-col mb-8 md:mb-0">
                  <Image
                    //src="../../public/about1.webp?height=400&width=400"
                    src="/about1.webp"
                    alt="Everything Talent simplifies hiring"
                    width={400}
                    height={400}
                    priority
                    className="rotate-45 w-48 h-48 border-[3px] dark:border-[#3577f39a] lg:w-80 lg:h-80 object-cover"
                  />
                  <Image
                    //src="/placeholder.svg?height=300&width=300"
                    src="/about2.webp"
                    alt="AI-driven assessments"
                    width={300}
                    height={300}
                    priority
                    className="hidden md:block -mt-16 rotate-45 border dark:border-[#3577f39a] w-48 h-48 lg:w-80 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-story" className="py-14 md:py-24 bg-[#020817] flex items-center justify-center">
          <div className="container px-4 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                From a simple idea to revolutionize hiring, we've grown into a leading force in recruitment technology.
              </p>
            </motion.div>
            {['The Journey to Transform Recruitment', 'Combining Innovation with Efficiency', 'Democratizing Recruitment Tools'].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mt-12">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      <div className={`order-2 md:order-${index % 2 ? 2 : 1}`}>
                        <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed text-muted-foreground">
                          Our journey began with a simple yet powerful idea: to make hiring easier, fairer, and more efficient for companies of all sizes. We've combined cutting-edge AI technology with user-friendly interfaces to create a platform that transforms the recruitment process.
                        </CardDescription>
                      </div>
                      <div className={`order-1 md:order-${index % 2 ? 1 : 2}`}>
                        <Image
                          src={`/story_1.webp`}
                          width={400}
                          height={300}
                          alt={title}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="our-values" className="py-14 md:py-24 bg-[#000000] flex items-center justify-center">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground mb-4">At Everything Talent, our core values drive everything we do</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  animate={controls}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-team" className="py-14 md:py-24 bg-[#020817] flex items-center justify-center">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Experts Team</h2>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center">
                          <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage 
                              src={member.image} 
                              alt={member.name}
                              loading="lazy"
                            />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <h3 className="text-lg font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{member.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#000000] flex items-center justify-center">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle>Our Culture</CardTitle>
                  <CardDescription>
                    We foster a collaborative and inclusive environment where innovation thrives, professional growth is supported, and every team member is valued.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Everything Talent is built on the principles of collaboration, respect, and continuous growth. We are a team of dedicated professionals passionate about improving the  hiring experience for both employers and candidates. Our culture fosters creativity, encourages learning, and supports each individual's development.
                  </p>
                  <p>
                    We are driven by a shared commitment to making a positive impact on the world of recruitment. As we grow, we remain focused on delivering solutions that are not only effective but also aligned with our core values. We invite you to join us on this journey and experience the difference our platform can make in your hiring process.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/careers">Join Our Team</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Journey section - updated timeline styling */}
        <section id="our-journey" className="bg-[#020817] pt-[2rem] md:py-[4rem] flex items-center justify-center">
          <div className="w-full md:container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-[10rem]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Journey</h2>
                <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                  Since our founding in 2021, Everything Talent has risen to the rank of market leader in recruitment technology, adding thousands of employees and customers, as well as a trophy case of awards along the way.
                </p>
              </motion.div>
            </div>
            <div className="relative mx-auto flex">
              <div className="flex flex-col justify-between gap-0 w-full">
                {journey.map((event, index) => (
                  <div key={index} className={`relative -mt-20 flex justify-start h-fit w-1/2 flex-col ${index % 2 === 0 ? '' : 'self-end'}`}>
                    <div className={`sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 ${index % 2 === 0 ? 'self-end rotate-180' : 'self-start'} bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d]`}>
                      <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                        <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center dark:bg-black dark:border-neutral-700">
                          <span className="text-white dark:text-white">{event.icon}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] ${index % 2 === 0 ? 'justify-end' : 'self-end'} z-20`}>
                      <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] dark:hover:bg-gradient-to-b dark:hover:from-[#120a1d] dark:hover:to-[#181023] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                          {event.date}
                        </p>
                        <div>
                          <Image
                            src={`/ai1.webp?height=212&width=317&text=${event.title}`}
                            width={317}
                            height={212}
                            alt={event.title}
                            className="rounded-lg border max-h-[212px] w-[317px] h-full"
                          />
                        </div>
                        <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2 opacity-100">
                          {event.title}
                          <ChevronRight />
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ height: 'calc(100% + 176px)' }} className="absolute -mt-40 left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-4 h-[calc(100%+10rem)] bg-gradient-to-r from-black via-violet-950 to-violet-800 dark:bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] dark:from-transparent dark:from-[0%] dark:via-purple-400 dark:to-transparent dark:to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_1%,black_99%,transparent_100%)]">
                <div style={{ height: '0px', opacity: 1 }} className="absolute inset-x-0 top-8 w-4 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Replace the existing footer with this new one */}
      <footer className="bg-[#000000] border-t py-12 mt-auto">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.webp"
                  alt="Everything Talent Logo"
                  width={40}
                  height={40}
                  className="dark:invert"
                />
                <span className="font-bold text-xl">Everything Talent</span>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support']
                  .map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <ul className="space-y-2">
                {['Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust']
                  .map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance']
                  .map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
                  <div>
              <Image
                src="/skyline.webp"
                alt="San Francisco skyline"
                width={1000}
                height={60}
                className="mb-4 md:mb-0 dark:invert mx-auto" // added mx-auto for center alignment
              />
              </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2024 Everything Talent Labs, LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
