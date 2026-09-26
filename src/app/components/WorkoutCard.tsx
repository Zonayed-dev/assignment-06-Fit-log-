import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "../types/workout";

interface WorkoutCardProps {
    workout: Workout;
}

export default function WorkoutCard({
    workout,
}: WorkoutCardProps) {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group block overflow-hidden border border-white/10 bg-zinc-950"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Categories */}
                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.category?.map((category) => (
                        <span
                            key={category}
                            className="rounded-full border border-[#ccff00]/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ccff00]"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h2 className="text-lg font-bold uppercase text-white">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mt-2 text-sm text-white/50">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <Flame size={14} />
                        {workout.calories} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <Star size={14} />
                        {workout.rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}