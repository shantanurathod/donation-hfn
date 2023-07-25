import DonateWidget from "../../../components/DonateWidget";
import Support from "../../../components/Support";

export default function Page() {
    return (
        <div>
            <DonateWidget firstBtn="Donate" secBtn="Share" quote="Quote" bgUrl=""/>
            <Support/>
        </div>
    );
}