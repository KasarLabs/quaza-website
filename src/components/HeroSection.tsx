"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import * as TWEEN from "@tweenjs/tween.js";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      let camera, scene, renderer, controls;
      const objects = [];
      const targets = { table: [], sphere: [], helix: [], grid: [] };

      // Liste complète des éléments du tableau périodique
      const table = [
        "H",
        "Hydrogen",
        "1.00794",
        1,
        1,
        "He",
        "Helium",
        "4.002602",
        18,
        1,
        "Li",
        "Lithium",
        "6.941",
        1,
        2,
        "Be",
        "Beryllium",
        "9.012182",
        2,
        2,
        "B",
        "Boron",
        "10.811",
        13,
        2,
        "C",
        "Carbon",
        "12.0107",
        14,
        2,
        "N",
        "Nitrogen",
        "14.0067",
        15,
        2,
        "O",
        "Oxygen",
        "15.9994",
        16,
        2,
        "F",
        "Fluorine",
        "18.9984032",
        17,
        2,
        "Ne",
        "Neon",
        "20.1797",
        18,
        2,
        "Na",
        "Sodium",
        "22.98976",
        1,
        3,
        "Mg",
        "Magnesium",
        "24.305",
        2,
        3,
        "Al",
        "Aluminium",
        "26.9815386",
        13,
        3,
        "Si",
        "Silicon",
        "28.0855",
        14,
        3,
        "P",
        "Phosphorus",
        "30.973762",
        15,
        3,
        "S",
        "Sulfur",
        "32.065",
        16,
        3,
        "Cl",
        "Chlorine",
        "35.453",
        17,
        3,
        "Ar",
        "Argon",
        "39.948",
        18,
        3,
        "K",
        "Potassium",
        "39.948",
        1,
        4,
        "Ca",
        "Calcium",
        "40.078",
        2,
        4,
        "Sc",
        "Scandium",
        "44.955912",
        3,
        4,
        "Ti",
        "Titanium",
        "47.867",
        4,
        4,
        "V",
        "Vanadium",
        "50.9415",
        5,
        4,
        "Cr",
        "Chromium",
        "51.9961",
        6,
        4,
        "Mn",
        "Manganese",
        "54.938045",
        7,
        4,
        "Fe",
        "Iron",
        "55.845",
        8,
        4,
        "Co",
        "Cobalt",
        "58.933195",
        9,
        4,
        "Ni",
        "Nickel",
        "58.6934",
        10,
        4,
        "Cu",
        "Copper",
        "63.546",
        11,
        4,
        "Zn",
        "Zinc",
        "65.38",
        12,
        4,
        "Ga",
        "Gallium",
        "69.723",
        13,
        4,
        "Ge",
        "Germanium",
        "72.63",
        14,
        4,
        "As",
        "Arsenic",
        "74.9216",
        15,
        4,
        "Se",
        "Selenium",
        "78.96",
        16,
        4,
        "Br",
        "Bromine",
        "79.904",
        17,
        4,
        "Kr",
        "Krypton",
        "83.798",
        18,
        4,
        "Rb",
        "Rubidium",
        "85.4678",
        1,
        5,
        "Sr",
        "Strontium",
        "87.62",
        2,
        5,
        "Y",
        "Yttrium",
        "88.90585",
        3,
        5,
        "Zr",
        "Zirconium",
        "91.224",
        4,
        5,
        "Nb",
        "Niobium",
        "92.90628",
        5,
        5,
        "Mo",
        "Molybdenum",
        "95.96",
        6,
        5,
        "Tc",
        "Technetium",
        "(98)",
        7,
        5,
        "Ru",
        "Ruthenium",
        "101.07",
        8,
        5,
        "Rh",
        "Rhodium",
        "102.9055",
        9,
        5,
        "Pd",
        "Palladium",
        "106.42",
        10,
        5,
        "Ag",
        "Silver",
        "107.8682",
        11,
        5,
        "Cd",
        "Cadmium",
        "112.411",
        12,
        5,
        "In",
        "Indium",
        "114.818",
        13,
        5,
        "Sn",
        "Tin",
        "118.71",
        14,
        5,
        "Sb",
        "Antimony",
        "121.76",
        15,
        5,
        "Te",
        "Tellurium",
        "127.6",
        16,
        5,
        "I",
        "Iodine",
        "126.90447",
        17,
        5,
        "Xe",
        "Xenon",
        "131.293",
        18,
        5,
        "Cs",
        "Caesium",
        "132.9054",
        1,
        6,
        "Ba",
        "Barium",
        "132.9054",
        2,
        6,
        "La",
        "Lanthanum",
        "138.90547",
        4,
        9,
        "Ce",
        "Cerium",
        "140.116",
        5,
        9,
        "Pr",
        "Praseodymium",
        "140.90765",
        6,
        9,
        "Nd",
        "Neodymium",
        "144.242",
        7,
        9,
        "Pm",
        "Promethium",
        "(145)",
        8,
        9,
        "Sm",
        "Samarium",
        "150.36",
        9,
        9,
        "Eu",
        "Europium",
        "151.964",
        10,
        9,
        "Gd",
        "Gadolinium",
        "157.25",
        11,
        9,
        "Tb",
        "Terbium",
        "158.92535",
        12,
        9,
        "Dy",
        "Dysprosium",
        "162.5",
        13,
        9,
        "Ho",
        "Holmium",
        "164.93032",
        14,
        9,
        "Er",
        "Erbium",
        "167.259",
        15,
        9,
        "Tm",
        "Thulium",
        "168.93421",
        16,
        9,
        "Yb",
        "Ytterbium",
        "173.054",
        17,
        9,
        "Lu",
        "Lutetium",
        "174.9668",
        18,
        9,
      ];

      function init() {
        camera = new THREE.PerspectiveCamera(
          40,
          window.innerWidth / window.innerHeight,
          1,
          10000,
        );
        camera.position.z = 3000;

        scene = new THREE.Scene();

        // Créer les éléments
        for (let i = 0; i < table.length; i += 5) {
          const element = document.createElement("div");
          element.className = "element";
          element.style.backgroundColor =
            "rgba(0,127,127," + (Math.random() * 0.5 + 0.25) + ")";

          const number = document.createElement("div");
          number.className = "number";
          number.textContent = i / 5 + 1;
          element.appendChild(number);

          const symbol = document.createElement("div");
          symbol.className = "symbol";
          symbol.textContent = table[i];
          element.appendChild(symbol);

          const details = document.createElement("div");
          details.className = "details";
          details.innerHTML = table[i + 1] + "<br>" + table[i + 2];
          element.appendChild(details);

          const objectCSS = new CSS3DObject(element);
          objectCSS.position.x = Math.random() * 4000 - 2000;
          objectCSS.position.y = Math.random() * 4000 - 2000;
          objectCSS.position.z = Math.random() * 4000 - 2000;
          scene.add(objectCSS);

          objects.push(objectCSS);

          // Position table
          const objTable = new THREE.Object3D();
          objTable.position.x = table[i + 3] * 140 - 1260;
          objTable.position.y = -(table[i + 4] * 180) + 990;
          targets.table.push(objTable);
        }

        // Disposition en sphère
        const vector = new THREE.Vector3();
        for (let i = 0, l = objects.length; i < l; i++) {
          const phi = Math.acos(-1 + (2 * i) / l);
          const theta = Math.sqrt(l * Math.PI) * phi;

          const objSphere = new THREE.Object3D();
          objSphere.position.x = 800 * Math.cos(theta) * Math.sin(phi);
          objSphere.position.y = 800 * Math.sin(theta) * Math.sin(phi);
          objSphere.position.z = 800 * Math.cos(phi);

          vector.copy(objSphere.position).multiplyScalar(2);
          objSphere.lookAt(vector);
          targets.sphere.push(objSphere);
        }

        // Disposition en hélice
        for (let i = 0, l = objects.length; i < l; i++) {
          const phi = i * 0.175 + Math.PI;

          const objHelix = new THREE.Object3D();
          objHelix.position.x = 900 * Math.sin(phi);
          objHelix.position.y = -(i * 8) + 450;
          objHelix.position.z = 900 * Math.cos(phi);

          vector.x = objHelix.position.x * 2;
          vector.y = objHelix.position.y;
          vector.z = objHelix.position.z * 2;

          objHelix.lookAt(vector);
          targets.helix.push(objHelix);
        }

        // Disposition en grille
        for (let i = 0; i < objects.length; i++) {
          const objGrid = new THREE.Object3D();
          objGrid.position.x = (i % 5) * 400 - 800;
          objGrid.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
          objGrid.position.z = Math.floor(i / 25) * 1000 - 2000;
          targets.grid.push(objGrid);
        }

        // Renderer
        renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (containerRef.current) {
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
          }
          containerRef.current.appendChild(renderer.domElement);
        }

        // Controls
        controls = new TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 0.5;
        controls.minDistance = 500;
        controls.maxDistance = 6000;
        controls.addEventListener("change", render);

        // Animation initiale - transformation vers l'hélice
        transformToHelix();

        window.addEventListener("resize", onWindowResize, false);
      }

      // Fonction spécifique pour transformer vers l'hélice (pour éviter les problèmes avec TWEEN)
      function transformToHelix() {
        for (let i = 0; i < objects.length; i++) {
          const object = objects[i];
          const target = targets.helix[i];

          // On crée notre propre animation sans TWEEN.js
          let startTime = null;
          const duration = 2000;

          // Position initiale
          const startPos = {
            x: object.position.x,
            y: object.position.y,
            z: object.position.z,
          };

          // Rotation initiale
          const startRot = {
            x: object.rotation.x,
            y: object.rotation.y,
            z: object.rotation.z,
          };

          function animateElement(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Fonction d'easing exponentielle
            const easing =
              progress === 0 ? 0 : Math.pow(2, 10 * (progress - 1));

            // Mettre à jour la position
            object.position.x =
              startPos.x + (target.position.x - startPos.x) * easing;
            object.position.y =
              startPos.y + (target.position.y - startPos.y) * easing;
            object.position.z =
              startPos.z + (target.position.z - startPos.z) * easing;

            // Mettre à jour la rotation
            object.rotation.x =
              startRot.x + (target.rotation.x - startRot.x) * easing;
            object.rotation.y =
              startRot.y + (target.rotation.y - startRot.y) * easing;
            object.rotation.z =
              startRot.z + (target.rotation.z - startRot.z) * easing;

            // Rendre la scène
            render();

            // Continuer l'animation si nécessaire
            if (progress < 1) {
              requestAnimationFrame(animateElement);
            }
          }

          // Démarrer l'animation
          requestAnimationFrame(animateElement);
        }
      }

      function transform(targets, duration) {
        for (let i = 0; i < objects.length; i++) {
          const object = objects[i];
          const target = targets[i];

          // On crée notre propre animation sans TWEEN.js
          let startTime = null;

          // Position et rotation initiales
          const startPos = {
            x: object.position.x,
            y: object.position.y,
            z: object.position.z,
          };

          const startRot = {
            x: object.rotation.x,
            y: object.rotation.y,
            z: object.rotation.z,
          };

          function animateElement(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing exponentiel
            const easing =
              progress === 0
                ? 0
                : progress === 1
                  ? 1
                  : progress < 0.5
                    ? Math.pow(2, 20 * progress - 10) / 2
                    : (2 - Math.pow(2, -20 * progress + 10)) / 2;

            // Mettre à jour la position
            object.position.x =
              startPos.x + (target.position.x - startPos.x) * easing;
            object.position.y =
              startPos.y + (target.position.y - startPos.y) * easing;
            object.position.z =
              startPos.z + (target.position.z - startPos.z) * easing;

            // Mettre à jour la rotation
            object.rotation.x =
              startRot.x + (target.rotation.x - startRot.x) * easing;
            object.rotation.y =
              startRot.y + (target.rotation.y - startRot.y) * easing;
            object.rotation.z =
              startRot.z + (target.rotation.z - startRot.z) * easing;

            // Rendre la scène
            render();

            // Continuer l'animation si nécessaire
            if (progress < 1) {
              requestAnimationFrame(animateElement);
            }
          }

          // Démarrer l'animation avec un délai aléatoire
          setTimeout(() => {
            requestAnimationFrame(animateElement);
          }, Math.random() * 500);
        }
      }

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
      }

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
      }

      function render() {
        renderer.render(scene, camera);
      }

      init();
      animate();

      // Fonction pour changer de vue lors d'un clic sur un bouton
      window.handleViewChange = (view) => {
        switch (view) {
          case "table":
            transform(targets.table, 2000);
            break;
          case "sphere":
            transform(targets.sphere, 2000);
            break;
          case "helix":
            transform(targets.helix, 2000);
            break;
          case "grid":
            transform(targets.grid, 2000);
            break;
        }
      };

      return () => {
        window.removeEventListener("resize", onWindowResize);

        if (controls) {
          controls.dispose();
        }

        if (renderer) {
          renderer.domElement.remove();
        }

        if (scene) {
          scene.clear();
        }
      };
    }
  }, [mounted]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div id="container" ref={containerRef} className="w-full h-full"></div>

      <div id="menu" className="absolute bottom-5 w-full text-center">
        <button
          onClick={() => window.handleViewChange("table")}
          className="text-teal-300 bg-transparent outline outline-1 outline-teal-300 border-0 px-3 py-1 mx-1 cursor-pointer hover:bg-teal-900"
        >
          Tableau
        </button>
        <button
          onClick={() => window.handleViewChange("sphere")}
          className="text-teal-300 bg-transparent outline outline-1 outline-teal-300 border-0 px-3 py-1 mx-1 cursor-pointer hover:bg-teal-900"
        >
          Sphère
        </button>
        <button
          onClick={() => window.handleViewChange("helix")}
          className="text-teal-300 bg-transparent outline outline-1 outline-teal-300 border-0 px-3 py-1 mx-1 cursor-pointer hover:bg-teal-900"
        >
          Hélice
        </button>
        <button
          onClick={() => window.handleViewChange("grid")}
          className="text-teal-300 bg-transparent outline outline-1 outline-teal-300 border-0 px-3 py-1 mx-1 cursor-pointer hover:bg-teal-900"
        >
          Grille
        </button>
      </div>

      <style jsx global>{`
        html,
        body {
          height: 100%;
        }
        body {
          background-color: #000000;
          margin: 0;
          font-family: Helvetica, sans-serif;
          overflow: hidden;
        }
        .element {
          width: 120px;
          height: 160px;
          box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.5);
          border: 1px solid rgba(127, 255, 255, 0.25);
          text-align: center;
          cursor: default;
        }
        .element:hover {
          box-shadow: 0px 0px 12px rgba(0, 255, 255, 0.75);
          border: 1px solid rgba(127, 255, 255, 0.75);
        }
        .element .number {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 12px;
          color: rgba(127, 255, 255, 0.75);
        }
        .element .symbol {
          position: absolute;
          top: 40px;
          left: 0px;
          right: 0px;
          font-size: 60px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.75);
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
        }
        .element .details {
          position: absolute;
          bottom: 15px;
          left: 0px;
          right: 0px;
          font-size: 12px;
          color: rgba(127, 255, 255, 0.75);
        }
        button {
          color: rgba(127, 255, 255, 0.75);
          background: transparent;
          outline: 1px solid rgba(127, 255, 255, 0.75);
          border: 0px;
          padding: 5px 10px;
          cursor: pointer;
        }
        button:hover {
          background-color: rgba(0, 255, 255, 0.5);
        }
        button:active {
          color: #000000;
          background-color: rgba(0, 255, 255, 0.75);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
