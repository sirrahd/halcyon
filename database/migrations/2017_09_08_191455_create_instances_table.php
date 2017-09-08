<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * CREATE TABLE `instances` (
         *   `host` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
         *   `client_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
         *   `client_secret` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
         *   `count` int(11) NOT NULL,
         *   `created_at` timestamp NULL DEFAULT NULL,
         *   `updated_at` timestamp NULL DEFAULT NULL
         * ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
         */
        Schema::create('instances', function (Blueprint $table) {
            $table->string('host', 254);
            $table->string('client_id', 64);
            $table->string('client_secret', 64);
            $table->integer('count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instances');
    }
}
