import { SkillType } from "beautiful-skill-tree";
import accelerateIcon from './Accelerateicon.jpg';
import backdraftIcon from './Backdrafticon.jpg';
import blightPhoenixIcon from './Blightpheonixicon.jpg';
import chainReactionIcon from './Chainreactionicon.jpg';
import cloudKillIcon from './Cloudkillicon.jpg';
import convergeIcon from './Convergeicon.jpg';
import elatedIcon from './Elatedicon.jpg';
import fleetIcon from './Fleeticon.jpg';
import flickerIcon from './Flickericon.jpg';
import forsightIcon from './Foresighticon.jpg';
import heliosIcon from './Heliosicon.jpg';
import immolateIcon from './Immolateicon.jpg';
import inertiaIcon from './Inertiaicon.jpg';
import kineticReflectIcon from './Kineticreflecticon.jpg';
import lifeTapIcon from './Lifetapicon.jpg';
import mindsEyeIcon from './Mindseyeicon.jpg';
import quickenIcon from './Quickenicon.jpg';
import reaperIcon from './Reapericon.jpg';
import recompenseIcon from './Recompenseicon.jpg';
import resIcon from './Resicon.jpg';
import restorationIcon from './Restorationicon.jpg';
import ruinIcon from './Ruinicon.jpg';
import scornIcon from './Scornicon.jpg';
import subsequenceIcon from './Subsequenceicon.jpg';
import suspensionIcon from './Suspensionicon.jpg';
import sweetReleaseIcon from './Sweetreleaseicon.jpg';
import thoughtLockIcon from './Thoughtlockicon.jpg';
import wardIcon from './Wardicon.jpg';
import wreckIcon from './Wreckicon.jpg';

export const motion: SkillType = [
  {
    id: "ward",
    icon: wardIcon,
    title: "Ward",
    tooltipDescription:
      "Improves your shield capacity and shield recharge delay.",
    children: [
      {
        id: "suspension",
        icon: suspensionIcon,
        title: "Suspension",
        tooltipDescription: "Increases the duration of Phaselock.",
        children: [
          {
            id: "fleet",
            icon: fleetIcon,
            title: "Fleet",
            tooltipDescription:
              "Your movement speed increases while your shields are depleted.",
            children: [
              {
                id: "converge",
                icon: convergeIcon,
                title: "Converge",
                tooltipDescription:
                  "Your Phaselock ability now also pulls nearby enemies to the original target. This deals a small amount of damage to affected enemies.",
                children: [
                  {
                    id: "quicken",
                    icon: quickenIcon,
                    title: "Quicken",
                    tooltipDescription:
                      "Increases the cooldown rate of your phaselock ability.",
                    children: []
                  }
                ]
              },
              {
                id: "thoughlock",
                icon: thoughtLockIcon,
                title: "Thoughtlock",
                tooltipDescription:
                  "Phaselock causes enemies to turn on their friends instead of being locked down. Additionally, Phaselock's duration is increased, but so is it's cooldown. ",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "accelerate",
    icon: accelerateIcon,
    title: "Accelerate",
    tooltipDescription:
      "Increases damage and bullet speed with all weapon types.",
    children: [
      {
        id: "kinetic-reflection",
        icon: kineticReflectIcon,
        title: "Kinetic Reflection",
        tooltipDescription:
          "After killing an enemy, you gain the ability to deflect enemy bullets, sending them flying toward nearby enemies. You take reduced damage from reflective bullets. Kinetic Reflection only works with bullets. This effect lasts for a short time.",
        children: [
          {
            id: "intertia",
            icon: inertiaIcon,
            title: "Intertia",
            tooltipDescription:
              "Killing an enemy causes your shields to quickly regenerate and increases your reload speed for a few seconds.",
            children: [
              {
                id: "subsequence",
                icon: subsequenceIcon,
                title: "Subsequence",
                tooltipDescription:
                  "When an enemy under the effects of your Phaselock dies there is a chance for your Phaselock ability to seek out and affect another target. ",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

export const harmony = [
  {
    id: "minds-eye",
    icon: mindsEyeIcon,
    title: "Mind's Eye",
    tooltipDescription: "Increases critical hit damage and melee damage.",
    children: [
      {
        id: "restoration",
        icon: restorationIcon,
        title: "Restoration",
        tooltipDescription:
          "Shooting other players heals them. Also increases your maximum health.",
        children: [
          {
            id: "elated",
            icon: elatedIcon,
            title: "Elated",
            tooltipDescription:
              "While you have an enemy Phaselocked you and your friends regenerate health.",
            children: [
              {
                id: "life-tap",
                icon: lifeTapIcon,
                title: "Life Tap",
                tooltipDescription:
                  "Killing an enemy causes you to steal health from any enemy you damage. This effect lasts a short while.",
                children: [
                  {
                    id: "scorn",
                    icon: scornIcon,
                    title: "Scorn",
                    tooltipDescription:
                      "Throw an Orb of Slag that constantly damages enemies near it. This ability has a cooldown. Perform a regular melee attack when Scorn is on cooldown.",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: "sweet-release",
            icon: sweetReleaseIcon,
            title: "Sweet Release",
            tooltipDescription:
              "Increases damage and bullet speed with all gun types.",
            children: [
              {
                id: "wreck",
                icon: wreckIcon,
                title: "Wreck",
                tooltipDescription:
                  "While you have an enemy Phaselocked you gain increased fire rate and damage with all gun types.",
                children: [
                  {
                    id: "recompense",
                    icon: recompenseIcon,
                    title: "Recompense",
                    tooltipDescription:
                      "When you take health damage there is chance your attacker takes damage equal to the amount of health you lost. ",
                    children: []
                  }
                ]
              },
              {
                id: "res",
                icon: resIcon,
                title: "Res",
                tooltipDescription:
                  "You can instantly revive your friend in Fight for your Life by using Phaselock on him/her.",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

export const cataclysm = [
  {
    id: "flicker",
    icon: flickerIcon,
    title: "Flicker",
    tooltipDescription:
      "Increases your chance to cause status effects with Fire, Shock, Corrosive and Slag guns.",
    children: [
      {
        id: "immolate",
        icon: immolateIcon,
        title: "Immolate",
        tooltipDescription:
          "Adds fire damage to all of your shots fired while in Fight for your Life. The additional fire damage is based on the damage of the weapon you're firing.",
        children: [
          {
            id: "chain-reaction",
            icon: chainReactionIcon,
            title: "Chain Reaction",
            tooltipDescription:
              "While you have an enemy Phaselocked all of your shots that hit enemies have a chance to ricochet and hit another nearby enemy. Chain Reaction only works with bullets.",
            children: [
              {
                id: "cloud-kill",
                icon: cloudKillIcon,
                title: "Cloud Kill",
                tooltipDescription:
                  "Shooting an enemy creates a lingering acid cloud, dealing constant corrosive damage to enemies who touch it. Only one acid cloud can be active at a time. ",
                children: [
                  {
                    id: "reaper",
                    icon: reaperIcon,
                    title: "Reaper",
                    tooltipDescription:
                      "You deal increased damage to any enemy that has more than 50% of his health remaining.",
                    children: []
                  },
                  {
                    id: "blight-phoenix",
                    icon: blightPhoenixIcon,
                    title: "Blight Phoenix",
                    tooltipDescription:
                      "Killing an enemy causes you to deal constant fire and corrosive damage to nearby enemies for a short time. The damage is based on your level and the level of Blight Phoenix.",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "forsight",
        icon: forsightIcon,
        title: "Forsight",
        tooltipDescription:
          "Increases magazine size and reload speed with all weapon types.",
        children: [
          {
            id: "helios",
            icon: heliosIcon,
            title: "Helios",
            tooltipDescription:
              "Phaselocking an enemy causes a fiery explosion, damaging any nearby enemies.",
            children: [
              {
                id: "backdraft",
                icon: backdraftIcon,
                title: "Backdraft",
                tooltipDescription:
                  "Your melee attacks deal additional fire damage. Also, when your shields become depleted, you create a fiery explosion, damaging nearby enemies. Your shields must fully recharge between explosions.",
                children: []
              },
              {
                id: "ruin",
                icon: ruinIcon,
                title: "Ruin",
                tooltipDescription:
                  'Phaselock now Slags, Electrocutes, and Corrodes all nearby enemies. "Ignorance and Inconsideration may be greater causes of ruin, but they are slow and lacking in spectacle"',
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];
