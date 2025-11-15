Shery.imageEffect("#back", {
  style: 5,
  gooey: true,
    setUniforms: (uniforms) => {
    uniforms.a.value = 2;
    uniforms.b.value = 0.75;
    uniforms.zindex.value = -9996999;
    uniforms.aspect.value = 2.002162129170186;
    uniforms.ignoreShapeAspect.value = true;
    uniforms.shapePosition.value = { x: 0, y: 0 };
    uniforms.shapeScale.value = { x: 0.5, y: 0.5 };
    uniforms.shapeEdgeSoftness.value = 0;
    uniforms.shapeRadius.value = 0;
    uniforms.currentScroll.value = 0;
    uniforms.scrollLerp.value = 0.07;
    uniforms.gooey.value = true;
    uniforms.infiniteGooey.value = true;
    uniforms.growSize.value = 4;
    uniforms.durationOut.value = 1;
    uniforms.durationIn.value = 1.5;
    uniforms.displaceAmount.value = 0.5;
    uniforms.masker.value = false;
    uniforms.maskVal.value = 1;
    uniforms.scrollType.value = 0;
    uniforms.geoVertex.value = 1;
    uniforms.noEffectGooey.value = true;
    uniforms.onMouse.value = 2;
    uniforms.noise_speed.value = 0.2;
    uniforms.metaball.value = 0.2;
    uniforms.discard_threshold.value = 0.5;
    uniforms.antialias_threshold.value = 0;
    uniforms.noise_height.value = 0.5;
    uniforms.noise_scale.value = 10;

    }
});

