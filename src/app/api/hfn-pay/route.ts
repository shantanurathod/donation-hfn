import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse)
{
    console.log('calling api-->')
    const body = 
        {
            userProfile: {
                userId: "",
                firstName: "Saravanan I. S.",
                lastName: "",
                emailAddress: "saravanan.suburayan@volunteer.heartfulness.org",
                phoneNumber: "+919884166175",
                addressLine1: "Kumaran street",
                addressLine2: "",
                city: "Chennai",
                state: "Tamil Nadu",
                postalCode: "600053",
                country: "India",
                memberId: "AAAAAA123",
                taxId: "AAAAA1111A",
                citizenshipCountry: "India",
                role: null
            },
            lineItems: [
                {
                    id: "",
                    donationItem: {
                        id: "37",
                        name: "",
                        description: "",
                        region: "",
                        currency: "",
                        billingAccountName: "",
                        isActive: false
                    },
                    currency: "INR",
                    amount: "10",
                    recurringStartDate: "",
                    recurringFrequency: ""
                }
            ],
            currency: null,
            amount: null,
            description: null,
            clientSuccessRedirectUrl: "<https://donations-staging-hfi.web.app/embedded/12/ffffff:000000:228b22:006400:006400:f0f0f0:f6f6f6:efeffe:f0f0f0/Donation> for HET/",
            clientFailureRedirectUrl: "<https://donations-staging-hfi.web.app/embedded/12/ffffff:000000:228b22:006400:D82727:ffffff:f6f6f6:efeffe:f0f0f0/Donation> for HET/",
            clientId: "me",
            extras: {
                projects: [""],
                identityType: "Pancard",
                identityNumber: "AAAAA1111A",
                packageDetail: []
            }
        }
        
    

    const response = await fetch('https://donation-service.qa.heartfulnessinstitute.in/donations/donate', {body: JSON.stringify(body)})
    
    // res = await response
    // console.log("resJson-->", resJson)
    return response
}