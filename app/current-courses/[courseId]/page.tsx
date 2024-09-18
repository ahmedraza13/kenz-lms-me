// ahmed bhai yahn coding naa krna yahn seo hogi
// <Main /> main coding krna

import React from 'react'
import Main from './Main'

const Page = ({ params }: any) => <Main courseId={params?.courseId} />

export default Page