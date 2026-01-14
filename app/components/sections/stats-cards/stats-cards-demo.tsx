
import { StatsCards } from "@/registry/chamaac/stats-cards/stats-cards";

export default function StatsCardsDemo() {
    return (
        <div className="w-full h-full flex items-center justify-center py-10 bg-orange-50">
            <StatsCards
                width="w-70"
                height="h-84"
            />
        </div>
    );
}
