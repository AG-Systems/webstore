# README

## To remove SPA 

Overwrite these files back to this

/products/index.html.erb

````erb
<div class="row" style="width: 90%; margin: 0 auto;">
<% @products.each do |product| %>
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="<%= product.picture %>" alt="...">
      <div class="caption">
        <h3><%= product.name %></h3>
        <h4>$<%= product.price %>0</h4>
        <%= link_to "Details", product_path(product), class: "btn btn-primary" %>
      </div>
    </div>
  </div>
  <% end %>
</div>
````

/products/show.html.erb

````erb
<div class="col-md-12 col-sm-12 col-xs-12" style="padding-left: 40px; padding-right: 40px; padding-top: 15px;">
   <div class="col-md-12 col-sm-12 col-xs-12" style="background-color: rgba(60, 60, 60, .8); box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 0px;">
      <div class="dashboard_graph">
         <div class="row x_title">
            <div class="col-md-6">
               <h3 style="color:white">Most Recent Result<small></small></h3>
            </div>
            <div class="col-md-6"></div>
         </div>
         <div class="col-md-6 col-sm-6 col-xs-12" id="left-side">
           
              <div class="container-fluid">
                 <div class="row">
                    <img src="<%= @product.picture %>" class="img-responsive" />
                 </div>
              </div>
              <div class="row text-center">
                <div class="col-md-12">
                  <h1><%= @product.name %></h1>
                  <p>
                    <%= @product.desc %>
                  </p>
            
                  <!-- <h2><%= number_to_currency(@product.price) %></h2> -->
                  <hr />
                  <%= render :template => "charges/new" %> 
            
                </div>
              </div>

         </div>
         <div class="col-md-6 col-sm-6 col-xs-12 bg-white" id="right-side">
            <div class="x_title">
               <div class="clearfix"></div>
            </div>
            <div id="right-side-panel">
              <%= react_component("Builder", {title: "Hello World"}) %>
            </div>
         </div>
      </div>
   </div>
</div

````
 /config/routes.rb
````ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :charges
  root 'products#index'
  resources :products, only: [:show]
end

````