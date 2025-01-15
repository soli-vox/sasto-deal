<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->double('price');
            $table->double('compare_price');
            $table->text('description')->nullable();
            $table->text('short_description')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('category_id')->constrained()->OnDelete('cascade');
            $table->foreignId('brand_id')->nullable()->constrained()->onDelete('cascade');
            $table->integer('quantity')->nullable();
            $table->string('sku')->unique();
            $table->string('bar_code');
            $table->integer('status')->default(1);
            $table->enum('is_featured', ['yes', 'no'])->default('no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
