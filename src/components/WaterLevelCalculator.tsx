import React, { useState } from 'react';
import { Sparkles, Gauge, Zap, Droplets, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface WaterLevelCalculatorProps {
  onOpenQuoteModal: (productName: string) => void;
}

export const WaterLevelCalculator: React.FC<WaterLevelCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [buildingType, setBuildingType] = useState<'industrial' | 'commercial' | 'residential'>('industrial');
  const [tankCapacity, setTankCapacity] = useState<number>(5000);
  const [motorHP, setMotorHP] = useState<number>(3);
  const [phase, setPhase] = useState<'1-phase' | '3-phase'>('3-phase');

  // Calculations
  const monthlyWaterSavedLiters = Math.round(tankCapacity * 0.18 * 30); // ~18% overflow prevention
  const monthlyPowerSavedKWh = Math.round(motorHP * 0.746 * 1.2 * 30); // estimated kWh saved from over-running
  const recommendedModel = motorHP > 5 || phase === '3-phase' 
    ? '3-Phase Industrial Control Panel (ME-CP3P-15HP)'
    : 'Automatic Water Level Controller (ME-WLC-9000D)';

  return (
    <div className="bg-gradient-to-br from-[#111111] via-neutral-900 to-[#111111] text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E86A2D]/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E86A2D]/20 border border-[#E86A2D]/40 text-[#E86A2D] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive ROI & Controller Selector</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Water Level Controller Sizing & Savings Estimator
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 mt-1">
              Select your plant or facility parameters to find the exact Madhav Enterprise controller model and projected energy savings.
            </p>
          </div>

          <div className="flex bg-white/10 p-1 rounded-xl text-xs font-semibold shrink-0">
            <button
              onClick={() => setBuildingType('industrial')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                buildingType === 'industrial' ? 'bg-[#E86A2D] text-white shadow' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Industrial Plant
            </button>
            <button
              onClick={() => setBuildingType('commercial')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                buildingType === 'commercial' ? 'bg-[#E86A2D] text-white shadow' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Commercial / Building
            </button>
            <button
              onClick={() => setBuildingType('residential')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                buildingType === 'residential' ? 'bg-[#E86A2D] text-white shadow' : 'text-neutral-300 hover:text-white'
              }`}
            >
              Housing Society
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tank Capacity Slider */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold text-neutral-300 flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-[#E86A2D]" />
                  <span>Total Water Tank Capacity (Liters):</span>
                </span>
                <span className="font-mono font-bold text-[#E86A2D] text-sm bg-white/10 px-3 py-1 rounded-lg">
                  {tankCapacity.toLocaleString()} L
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={tankCapacity}
                onChange={(e) => setTankCapacity(Number(e.target.value))}
                className="w-full accent-[#E86A2D] bg-neutral-800 rounded-lg cursor-pointer h-2"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>1,000 L</span>
                <span>25,000 L</span>
                <span>50,000 L</span>
              </div>
            </div>

            {/* Motor HP Selector */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold text-neutral-300 flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-[#E86A2D]" />
                  <span>Pump Motor Rating (HP):</span>
                </span>
                <span className="font-mono font-bold text-[#E86A2D] text-sm bg-white/10 px-3 py-1 rounded-lg">
                  {motorHP} HP
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 5, 10, 15].map((hp) => (
                  <button
                    key={hp}
                    onClick={() => setMotorHP(hp)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      motorHP === hp
                        ? 'bg-[#E86A2D] border-[#E86A2D] text-white shadow-lg shadow-[#E86A2D]/20'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    {hp} HP
                  </button>
                ))}
              </div>
            </div>

            {/* Electrical Phase Selector */}
            <div>
              <span className="block text-xs font-bold text-neutral-300 mb-2">
                Power Supply Phase:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPhase('1-phase')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all ${
                    phase === '1-phase'
                      ? 'bg-[#E86A2D] border-[#E86A2D] text-white'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Single Phase (220V)</span>
                </button>

                <button
                  onClick={() => setPhase('3-phase')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 transition-all ${
                    phase === '3-phase'
                      ? 'bg-[#E86A2D] border-[#E86A2D] text-white'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Three Phase (415V Industrial)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result Savings Card */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                Recommended Solution:
              </p>
              <h4 className="text-lg font-display font-extrabold text-[#E86A2D] leading-snug">
                {recommendedModel}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-neutral-400 uppercase font-semibold">Est. Monthly Water Saved</p>
                <p className="text-xl font-display font-extrabold text-emerald-400 mt-0.5">
                  ~{monthlyWaterSavedLiters.toLocaleString()} L
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-neutral-400 uppercase font-semibold">Est. Power Saved</p>
                <p className="text-xl font-display font-extrabold text-amber-400 mt-0.5">
                  ~{monthlyPowerSavedKWh} kWh
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Dry-Run Motor Burnout Protection</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automatic High/Low Line Voltage Cutoff</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Maintenance-free Stainless Steel Sensors</span>
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal(recommendedModel)}
              className="w-full bg-[#E86A2D] hover:bg-[#d0591f] text-white py-3 rounded-xl text-xs font-bold transition-all shadow-lg shadow-[#E86A2D]/30 flex items-center justify-center gap-2 group"
            >
              <span>Get Direct Quote for This Model</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
