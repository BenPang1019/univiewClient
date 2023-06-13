import React from 'react'
import '../Warranty/Warranty.css'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

export const Warranty = () => {

    return(
        <motion.div className='warranty' >
            <div className='web'>
                <div className='containerOne'>
                    <h1 className='containerOneHOne'>Warranty</h1>

                    <h3 className='containerOneHTwo'>What are the terms of our Warranty and Repair?</h3>
                    <p className='containerOnePOne'>
                        1.VSH reserves the right to replace the product or relevant part with the same or equivalent product or part, rather than repair it. Where a replacement is provided, the product or part becomes property of VSH. VSH Technology may replace
                        with refurbished parts, replacement of the product or part does not extend or restart the warranty period.<br/>
                        2.All sales are considered final, no refund will be entitled.<br/>
                        3.VSH shall not be liable to any losses or damages in the event of delay or failure of delivery caused by the courier service provider.<br/>
                        4.All warranty policy is in accordance with the terms and conditions of their respective suppliers.<br/>
                        5.To claim warranty, customer needs to send the product to our office address located at Puchong, Selangor at your own cost. The return of the repaired product to the customer will also be at the customer's own cost. Customers can choose to send and pick up repaired products at our office to avoid delivery fees.<br/>
                        6.Remark: How to initiate a warranty check<br/>
                        &nbsp;&nbsp;&nbsp;-Email the Warranty Department at admin@uniview.com.my to report the issue. Or fill in the form provided.<br/>
                        &nbsp;&nbsp;&nbsp;-For shipping, place the product in secure packaging, along with a copy of your invoice and a brief explanation of why the original item is being returned.<br/>
                        Warranty Department: No.93C, Jalan BP 7/2, Bandar Bukit Puchong, 47120 Puchong, Selangor.<br/>
                        Warranty Contact: 019-212 5168<br/>
                        If you having any problems, kindly contact us for further guidance.
                    </p>

                    <h3 className='containerOneHTwo'>What is the Return Policy of VSH Technology?</h3>
                    <p className='containerOnePOne'>Goods sold is returnable within 7 days at a restocking fee of 20%. Goods must be returned in its original packaging complete with accessories and in mint condition. Goods returned after 7 days will not be accepted.</p>

                    <h3 className='containerOneHTwo'>Product Warranty Period Details</h3>
                    <p className='containerOnePOne'>
                    <table className='table'>
                        <tr>
                            <td>3 Years</td>
                            <td>2 Years</td>
                            <td>1.5 Years</td>
                            <td>1 Years</td>
                        </tr>

                        <td>
                            <tr>-Hard Disk</tr>
                            <tr>-ViewSonic Monitor</tr>
                            <tr>-REYEE/ RUIJIE Product</tr>
                        </td>

                        <td>
                            <tr>-HIKVISION Cctv/ Nvr/Dvr/Monitor/ Switch</tr>
                            <tr>-Dahua Product Cctv/ Nvr/Dvr/Monitor/ Switch</tr>
                            <tr>-VIVOS / BLUGARD KEYPAD (LCD BROKEN, AUTOMATICALLY VOID)</tr>
                            <tr>-ViewSonic Projector</tr>
                            <tr>-IP-Com Product</tr>
                            <tr>-Autodoor</tr>
                            <tr>-MORNSUN Power Supply</tr>
                        </td>

                        <td>
                            <tr>-Dahua Cooper Series</tr>
                        </td>

                        <td>
                            <tr>-VS-9/ VS-121/ VS-120/VS-119</tr>
                            <tr>-VS-1205/ 1210/ 1220 with & without casing</tr>
                            <tr>-All Model Autogate and accessories</tr>
                            <tr>-Backup Battery</tr>
                            <tr>-All model Solar Panel</tr>
                            <tr>-Multiplexer (HD102/HD104)</tr>
                            <tr>-iMOU/Dahua product(cooper series 1.5 years)</tr>
                            <tr>-Loop Detector</tr>
                            <tr>-Commax intercom</tr>
                            <tr>-EMLOCK</tr>
                            <tr>-EZVIZ Product</tr>
                            <tr>-P2P BLU/VIVOS</tr>
                            <tr>-Reolink Product</tr>
                            <tr>-UPS KOSS /</tr>
                            <tr>-Smart Door Lock</tr>
                            <tr>-SD CARD</tr>
                            <tr>-ZKTECO Product</tr>
                            <tr>-HDMI EXTENDER 100M</tr>
                        </td>
                    </table>

                    <table className='table'>
                        <tr>
                            <td>6 Months</td>
                            <td>3 Months</td>
                            <td>1 Week</td>    
                        </tr>

                        <td>
                            <tr>-PVT</tr>
                            <tr>-GSM Module</tr>
                            <tr>-433 Remote</tr>
                            <tr>-Surge Protector</tr>
                            <tr>-HDMI SWITCH/SPLITTER</tr>
                            <tr>-VS-12/5A power supply adapter</tr>
                        </td>

                        <td>
                            <tr>-Surge Protector</tr>
                            <tr>-Door Bell (12V)</tr>
                            <tr>-Photo Beam</tr>
                            <tr>-Internal Siren</tr>
                        </td>

                        <td>
                            <tr>-2amp Adapter</tr>
                            <tr>-Video Balun</tr>
                        </td>

                    </table>
                    </p>
                </div>
            </div>


            <div className='mobile'>
            <div className='containerOne'>
                    <h1 className='containerOneHOne'>Warranty</h1>

                    <h3 className='containerOneHTwo'>What are the terms of our Warranty and Repair?</h3>
                    <p className='containerOnePOne'>
                        1.VSH reserves the right to replace the product or relevant part with the same or equivalent product or part, rather than repair it. Where a replacement is provided, the product or part becomes property of VSH. VSH Technology may replace
                        with refurbished parts, replacement of the product or part does not extend or restart the warranty period.<br/>
                        2.All sales are considered final, no refund will be entitled.<br/>
                        3.VSH shall not be liable to any losses or damages in the event of delay or failure of delivery caused by the courier service provider.<br/>
                        4.All warranty policy is in accordance with the terms and conditions of their respective suppliers.<br/>
                        5.To claim warranty, customer needs to send the product to our office address located at Puchong, Selangor at your own cost. The return of the repaired product to the customer will also be at the customer's own cost. Customers can choose to send and pick up repaired products at our office to avoid delivery fees.<br/>
                        6.Remark: How to initiate a warranty check<br/>
                        &nbsp;&nbsp;&nbsp;-Email the Warranty Department at admin@uniview.com.my to report the issue. Or fill in the form provided.<br/>
                        &nbsp;&nbsp;&nbsp;-For shipping, place the product in secure packaging, along with a copy of your invoice and a brief explanation of why the original item is being returned.<br/>
                        Warranty Department: No.93C, Jalan BP 7/2, Bandar Bukit Puchong, 47120 Puchong, Selangor.<br/>
                        Warranty Contact: 019-212 5168<br/>
                        If you having any problems, kindly contact us for further guidance.
                    </p>

                    <h3 className='containerOneHTwo'>What is the Return Policy of VSH Technology?</h3>
                    <p className='containerOnePOne'>Goods sold is returnable within 7 days at a restocking fee of 20%. Goods must be returned in its original packaging complete with accessories and in mint condition. Goods returned after 7 days will not be accepted.</p>

                    <h3 className='containerOneHTwo'>Product Warranty Period Details</h3>
                    <p className='containerOnePOne'>
                    <table className='table'>
                        <tr>
                            <td>3 Years</td>
                            <td>2 Years</td>
                            <td>1.5 Years</td>
                            <td>1 Years</td>
                        </tr>

                        <td>
                            <tr>-Hard Disk</tr>
                            <tr>-ViewSonic Monitor</tr>
                            <tr>-REYEE/ RUIJIE Product</tr>
                        </td>

                        <td>
                            <tr>-HIKVISION Cctv/ Nvr/Dvr/Monitor/ Switch</tr>
                            <tr>-Dahua Product Cctv/ Nvr/Dvr/Monitor/ Switch</tr>
                            <tr>-VIVOS / BLUGARD KEYPAD (LCD BROKEN, AUTOMATICALLY VOID)</tr>
                            <tr>-ViewSonic Projector</tr>
                            <tr>-IP-Com Product</tr>
                            <tr>-Autodoor</tr>
                            <tr>-MORNSUN Power Supply</tr>
                        </td>

                        <td>
                            <tr>-Dahua Cooper Series</tr>
                        </td>

                        <td>
                            <tr>-VS-9/ VS-121/ VS-120/VS-119</tr>
                            <tr>-VS-1205/ 1210/ 1220 with & without casing</tr>
                            <tr>-All Model Autogate and accessories</tr>
                            <tr>-Backup Battery</tr>
                            <tr>-All model Solar Panel</tr>
                            <tr>-Multiplexer (HD102/HD104)</tr>
                            <tr>-iMOU/Dahua product(cooper series 1.5 years)</tr>
                            <tr>-Loop Detector</tr>
                            <tr>-Commax intercom</tr>
                            <tr>-EMLOCK</tr>
                            <tr>-EZVIZ Product</tr>
                            <tr>-P2P BLU/VIVOS</tr>
                            <tr>-Reolink Product</tr>
                            <tr>-UPS KOSS /</tr>
                            <tr>-Smart Door Lock</tr>
                            <tr>-SD CARD</tr>
                            <tr>-ZKTECO Product</tr>
                            <tr>-HDMI EXTENDER 100M</tr>
                        </td>
                    </table>

                    <table className='table'>
                        <tr>
                            <td>6 Months</td>
                            <td>3 Months</td>
                            <td>1 Week</td>    
                        </tr>

                        <td>
                            <tr>-PVT</tr>
                            <tr>-GSM Module</tr>
                            <tr>-433 Remote</tr>
                            <tr>-Surge Protector</tr>
                            <tr>-HDMI SWITCH/SPLITTER</tr>
                            <tr>-VS-12/5A power supply adapter</tr>
                        </td>

                        <td>
                            <tr>-Surge Protector</tr>
                            <tr>-Door Bell (12V)</tr>
                            <tr>-Photo Beam</tr>
                            <tr>-Internal Siren</tr>
                        </td>

                        <td>
                            <tr>-2amp Adapter</tr>
                            <tr>-Video Balun</tr>
                        </td>

                    </table>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}