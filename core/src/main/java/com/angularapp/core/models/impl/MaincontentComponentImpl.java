/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angularapp.core.models.impl;

import java.util.Collections;
import java.util.List;
import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.angularapp.core.models.MaincontentComponent;
import com.angularapp.core.models.header;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    MaincontentComponent.class,
    ComponentExporter.class
}, resourceType = "angularapp/components/maincontent-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MaincontentComponentImpl
    implements MaincontentComponent
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private List<header> attributes;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonType;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonText;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image imageSrc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imageAlt;
    @SlingObject
    private Resource resource;

    @Override
    public List<header> getAttributes() {
        return attributes != null ? Collections.unmodifiableList(attributes) : null;
    }

    @Override
    @JsonProperty("buttonType")
    public String getButtonType() {
        return buttonType;
    }

    @Override
    @JsonProperty("buttonText")
    public String getButtonText() {
        return buttonText;
    }

    @Override
    @JsonProperty("imageSrc")
    public Image getImageSrc() {
        return imageSrc;
    }

    @Override
    @JsonProperty("imageAlt")
    public String getImageAlt() {
        return imageAlt;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
